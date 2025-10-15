const { Account } = require("./Account.js");
const { Rating } = require("./Rating.js");
const { Category } = require("./Category.js");

// Account -> Category
Account.belongsTo(Category, { foreignKey: 'service_category_id', as: 'category'});

// Provider -> Ratings
Account.hasMany(Rating, { foreignKey: 'provider_id', as: 'ratings' });
Rating.belongsTo(Account, { foreignKey: 'provider_id', as: 'provider' });

// User -> Ratings
Account.hasMany(Rating, { foreignKey: 'user_id', as: 'userRatings' });
Rating.belongsTo(Account, { foreignKey: 'user_id', as: 'user' });

module.exports = { Account, Rating, Category };
