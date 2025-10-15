const sequelize = require("../db"); // import your sequelize instance
const { QueryTypes } = require("sequelize");

exports.getAllCategories = async (req, res) => {
  try {
    // 🧠 Raw SQL query with alias names
    const categories = await sequelize.query(
      `SELECT category_id AS id, category_name AS categoryName 
       FROM categories`,
      {
        type: QueryTypes.SELECT, // ensures it returns plain JS objects
      }
    );
    console.log("Categories fetched:", categories);
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ error: "Failed to retrieve categories" });
  }
};
