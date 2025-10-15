// src/models/Rating.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

const { Account } = require("./Account.js");

const Rating = sequelize.define(
  "Rating",
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    provider_id: { type: DataTypes.INTEGER, allowNull: false },
    provider_name: { type: DataTypes.STRING, allowNull: false },
    star_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
  },
  {
    tableName: "ratings",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);


module.exports = { Rating };
// You can define additional associations here if needed
// e.g., Rating.belongsTo(SomeOtherModel, { foreignKey: 'some_foreign_key' });
