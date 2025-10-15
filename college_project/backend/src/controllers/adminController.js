const Sequelize = require("../db/index.js");
const { Account, Category } = require("../models/associations.js");

exports.getUnverifiedProviders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    // Count total unverified providers
    const { rows, count } = await Account.findAndCountAll({
      where: {
        role: "provider",
        verified: false,
      },
      order: Sequelize.literal("created_at DESC"),
      limit,
      offset,
    });
    const total = count;
    const totalPages = Math.ceil(total / limit);

    // Convert Aadhaar Buffer (MEDIUMBLOB) → Base64 string
    const result = rows.map((p) => ({
      provider_id: p.account_id,
      full_name: p.full_name,
      aadhar_file: p.aadhar_file
        ? p.aadhar_file.toString("base64") // Convert BLOB → Base64
        : null,
    }));

    res.json({
      currentPage: page,
      totalPages,
      totalRecords: total,
      providers: result,
    });
  } catch (err) {
    console.error("Error fetching unverified providers:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.verifyProvider = async (req, res) => {
  try {
    const { providerId } = req.body;
    if (!providerId) {
      return res.status(400).json({ message: "providerId is required" });
    }
    const provider = await Account.findOne({
      where: { account_id: providerId, role: "provider" },
    });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    // 4. Update provider's verified status
    provider.verified = true;
    await provider.save();

    res.json({ message: "Provider verified successfully" });
  } catch (error) {
    console.error("Error verifying provider:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getDashboardData = async (req, res) => {
  try {
    // Aggregate statistics using a single query
    const [stats] = await Account.findAll({
      attributes: [
        // Total users
        [
          Sequelize.cast(
            Sequelize.fn("SUM", Sequelize.literal("role = 'user'")),
            "UNSIGNED"
          ),
          "totalUsers",
        ],
        // Total providers
        [
          Sequelize.cast(
            Sequelize.fn("SUM", Sequelize.literal("role = 'provider'")),
            "UNSIGNED"
          ),
          "totalProviders",
        ],
        // Active providers
        [
          Sequelize.cast(
            Sequelize.fn(
              "SUM",
              Sequelize.literal("role = 'provider' AND status = true")
            ),
            "UNSIGNED"
          ),
          "activeProviders",
        ],
        [
          Sequelize.cast(
            Sequelize.fn(
              "SUM",
              Sequelize.literal("role = 'user' AND status = true")
            ),
            "UNSIGNED"
          ),
          "activeUsers",
        ],
        // Not verified providers
        [
          Sequelize.cast(
            Sequelize.fn(
              "SUM",
              Sequelize.literal("role = 'provider' AND verified = false")
            ),
            "UNSIGNED"
          ),
          "notVerifiedProviders",
        ],
        // total number of categories
        [
          Sequelize.literal(`(SELECT COUNT(*) FROM categories)`),
          "totalCategories",
        ],
      ],
      raw: true,
    });
    console.log("stat", stats);
    // Providers by category
    const providersByCategory = await Account.findAll({
      attributes: [
        [Sequelize.col("category.category_name"), "category_name"],
        [
          Sequelize.fn("COUNT", Sequelize.col("Account.account_id")),
          "provider_count",
        ],
      ],
      include: [
        {
          model: Category,
          as: "category",
          attributes: [],
        },
      ],
      where: {
        role: "provider",
      },
      group: ["category.category_id"],
      order: [[Sequelize.literal("provider_count"), "DESC"]],
      raw: true,
    });
    console.log("providersByCategory", providersByCategory);

    const monthlyDataRaw = await Account.findAll({
      attributes: [
        [
          Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%b"),
          "month",
        ],
        [Sequelize.literal("CAST(COUNT(account_id) AS UNSIGNED)"), "count"],
      ],
      group: [Sequelize.fn("DATE_FORMAT", Sequelize.col("created_at"), "%b")],
      raw: true,
    });
    console.log("monthlyDataRaw", monthlyDataRaw);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyActivity = monthNames.map((m) => {
      const row = monthlyDataRaw.find((r) => r.month === m);
      return {
        month: m,
        count: row ? Number(row.count) : 0,
      };
    });
    return res.json({
      success: true,
      totalUsers: stats.totalUsers,
      totalProviders: stats.totalProviders,
      activeProviders: stats.activeProviders,
      notVerifiedProviders: stats.notVerifiedProviders,
      totalCategories: stats.totalCategories,
      activeUsers: stats.activeUsers,
      providersByCategory,
      monthlyActivity,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
