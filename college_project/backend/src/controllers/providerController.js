const Sequelize = require("../db/index.js");
const { Op, fn, col } = require("sequelize");
const { Account, Category, Rating } = require("../models/associations.js");

// Get Providers with average ratings
exports.getProviders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const offset = (page - 1) * limit;

    const { category_id, min_rating, status } = req.query;
    console.log("query", req.query);
    // Build filters
    let whereClause = { role: "provider" };
    if (status !== undefined) whereClause.status = status === "true";
    if (category_id) whereClause.service_category_id = category_id;
    console.log("whereClause", whereClause);
    // Query providers with ratings and category
    const { rows, count } = await Account.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Rating,
          as: "ratings",
          attributes: [],
        },
        {
          model: Category,
          as: "category",
          attributes: ["category_name"],
        },
      ],
      attributes: [
        "account_id",
        "full_name",
        "email",
        "phone_no",
        "hour_rate",
        "location",
        "status",
        "experience",
        "qualification",
        "description",
        "verified",
        [fn("COUNT", col("ratings.rating_id")), "ratings_count"],
        [
          Sequelize.cast(
            fn("ROUND", fn("AVG", col("ratings.star_count"))),
            "UNSIGNED"
          ),
          "average_rating",
        ],
      ],
      group: ["Account.account_id", "category.category_id"],
      having: min_rating
        ? Sequelize.where(
            fn("AVG", col("ratings.star_count")),
            ">=",
            parseFloat(min_rating)
          )
        : undefined,
      limit,
      offset,
      subQuery: false,
      order: Sequelize.literal(
        "average_rating DESC, `Account`.`created_at` DESC"
      ),
    });

    const providers = rows.map((p) => ({
      ...p.toJSON(),
      average_rating: Number(p.getDataValue("average_rating") || 0),
      ratings_count: Number(p.getDataValue("ratings_count") || 0),
    }));

    res.json({
      totalProviders: count.length,
      currentPage: page,
      totalPages: Math.ceil(count.length / limit),
      providers,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "getting providers failed pls try again later" });
  }
};


exports.handleActiveStatus = async (req, res) => {
  try {
    const { providerId, status } = req.body;

    if (!providerId || status === undefined) {
      console.log("sssss", { providerId, status });
      return res.status(400).json({ message: "providerId and status are required" });
    }

    const provider = await Account.findOne({ where: { account_id: providerId, role: "provider" } });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    if (typeof status !== "boolean") {
      return res.status(400).json({ message: "Status must be a boolean value" });
    }

    provider.status = status;
    await provider.save();

    res.json({ message: "Provider status updated successfully", status: provider.status });
  } catch (error) {
    console.error("Error updating provider status:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
