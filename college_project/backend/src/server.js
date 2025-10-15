require('dotenv').config();
const app = require('./app');
const sequelize = require('./db/index.js'); 

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync(); // Create tables if not exist
    console.log('Tables synced');

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error('Unable to start server:', err);
  }
})();