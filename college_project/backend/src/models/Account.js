// src/models/Account.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index.js');

const Account = sequelize.define('Account', {
  account_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone_no: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  location: DataTypes.STRING,
  role: { type: DataTypes.ENUM('user','provider','admin'), defaultValue: 'user' },
  service_category_id: DataTypes.INTEGER,
  experience: DataTypes.INTEGER,
  qualification: DataTypes.STRING,
  hour_rate: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  aadhar_file: DataTypes.BLOB('medium'),
  verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: 'accounts',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'modified_at'
});

module.exports = { Account };
// You can define associations here if needed
// e.g., Account.hasMany(SomeOtherModel, { foreignKey: 'account_id' });