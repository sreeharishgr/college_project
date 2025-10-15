const { Category } = require("../models/associations.js");

exports.handleLoginResponse = async (account) => {
  const {
    account_id,
    full_name,
    email: userEmail,
    role,
    location,
    phone_no,
    status,
    password: userPassword,
  } = account;

  let serviceCategoryName;
  if (role === "provider") {
    const category = await Category.findOne({
      where: { category_id: account.service_category_id },
    });
    serviceCategoryName = category.category_name;
  }
  const loggedInUser = {
    [role + "_id"]: account_id,
    full_name,
    email: userEmail,
    role,
    location,
    phone_no,
    status,
    ...(role === "user" && { password: userPassword }),
    ...(role === "provider" && {
      experience: account.experience,
      qualification: account.qualification,
      hour_rate: account.hour_rate,
      description: account.description,
      serviceCategoryName,
    }),
  };

  return {
    message: `Login successful ${role}`,
    user: loggedInUser,
    logged: true,
  };
};
