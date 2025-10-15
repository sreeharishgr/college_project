const { Account, Category } = require("../models/associations.js");

exports.createUser = async (user) => {
  await Account.create({
    full_name: user.full_name,
    email: user.email,
    password: user.password,
    phone_no: user.phone_no,
    role: user.role,
    location: user.location,
  });
  return "Signup successful User";
};

exports.createProvider = async (provider, aadharBuffer) => {
  // Handle category
  let categoryId = provider.service_category_id;
  if (!categoryId && provider.category_name) {
    const existingCategory = await Category.findOne({
      where: { category_name: provider.category_name },
    });
    if (existingCategory) categoryId = existingCategory.category_id;
    else {
      const newCategory = await Category.create({
        category_name: provider.category_name,
      });
      categoryId = newCategory.category_id;
    }
  }

  await Account.create({
    full_name: provider.full_name,
    email: provider.email,
    password: provider.password,
    phone_no: provider.phone_no,
    role: provider.role,
    location: provider.location,
    aadhar_file: aadharBuffer,
    service_category_id: categoryId,
    experience: Number(provider.experience),
    qualification: provider.qualification,
    hour_rate: Number(provider.hour_rate), // number
    description: provider.description,
  });

  return "Signup successful Provider";
};

// Validate signup data
exports.validateSignupData = async (account) => {
  const trimedAccount = {};
  for (const key in account) {
    if (typeof account[key] === "string") {
      trimedAccount[key] = account[key].trim();
    } else {
      trimedAccount[key] = account[key];
    }
  }
  const { full_name, email, password, phone_no, role, location } =
    trimedAccount;

  if (!full_name || !email || !password || !phone_no || !role || !location) {
    throw new Error("Missing required fields");
  }
  console.log("trimedAccount", trimedAccount);
  const existingUser = await Account.findOne({ where: { email } });
  if (existingUser) throw new Error("Email already exists");

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  if (role === "provider") {
    const { category_name, experience, qualification, hour_rate, description } =
      trimedAccount;
    if (
      !category_name ||
      !experience ||
      !qualification ||
      !hour_rate ||
      !description
    ) {
      throw new Error("Missing required fields for provider");
    }
  }

  return trimedAccount;
};
