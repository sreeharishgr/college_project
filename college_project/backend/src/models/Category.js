// src/models/Category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index.js');

const Category = sequelize.define('Category', {
  category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_name: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'categories',
  timestamps: false
});


module.exports = { Category };
// You can define associations here if needed
// e.g., Category.hasMany(SomeOtherModel, { foreignKey: 'category_id' });