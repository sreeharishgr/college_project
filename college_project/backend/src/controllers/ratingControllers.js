const Sequelize = require("../db/index.js");
const { Op } = require("sequelize");
const { Account, Rating } = require("../models/associations");

exports.submitRating = async (req, res) => {
  try {
    const { providerId, starCount, userId } = req.body;

    // Validate inputs
    if (!userId || !providerId || !starCount)
      return res
        .status(400)
        .json({
          message: "userDetails, providerDetails, and starCount are required.",
        });

    if (isNaN(starCount) || starCount < 1 || starCount > 5)
      return res
        .status(400)
        .json({ message: "starCount must be between 1 and 5." });

    // Verify user exists and is a 'user'
    const user = await Account.findOne({
      where: { account_id: userId, role: "user" },
    });
    if (!user)
      return res.status(404).json({ message: "User not found or not valid." });

    // Verify provider exists and is a 'provider'
    const provider = await Account.findOne({
      where: { account_id: providerId, role: "provider" },
    });
    if (!provider)
      return res
        .status(404)
        .json({ message: "Provider not found or not valid." });

    // Create the rating
    const newRating = await Rating.create({
      user_id: userId,
      user_name: user.full_name,
      provider_id: providerId,
      provider_name: provider.full_name,
      star_count: starCount,
    });

    res
      .status(201)
      .json({ message: "Rating submitted successfully", rating: newRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit rating by user" });
  }
};

exports.getAllRatingsPaginated = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const trimmedQuery = {};
    for (const key in req.query) {
      if (typeof req.query[key] === "string") {
        trimmedQuery[key] = req.query[key].trim();
      } else {
        trimmedQuery[key] = req.query[key];
      }
    }

    const { providerName } = trimmedQuery;
    // Build filters
    let whereClause = {};
    if (providerName) {
      whereClause.provider_name = {
        [Op.like]: `%${providerName}%`,
      };
    }
    console.log("whereClause", whereClause);
    const { rows, count } = await Rating.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order: Sequelize.literal("created_at DESC"),
    });
console.log("rows",rows)
    res.status(200).json({
      totalPages: Math.ceil(count / limit),
      totalRatings: count,
      currentPage: parseInt(page),
      ratings: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve All ratings" });
  }
};
