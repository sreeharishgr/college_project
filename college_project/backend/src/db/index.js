const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "localserviceprovider",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",

  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

// try {
//    sequelize.authenticate();
//   console.log('Database connected successfully!');
// } catch (err) {
//   console.error('Unable to connect to database:', err);
// }

// sequelize.sync({ alter: true }).then(() => {
//   console.log("All models were synchronized successfully.");
// });
// sequelize.sync({ force: false }).then(() => {
//   console.log("Database & tables created!");
// });

module.exports = sequelize;

// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.DB_PORT || 3306,
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_NAME || "localserviceprovider",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// module.exports = pool;
