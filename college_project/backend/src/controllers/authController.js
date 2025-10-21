const { Account } = require("../models/associations.js");
const {
  createUser,
  createProvider,
  validateSignupData,
} = require("../subMethods/signupMethods");
const { handleLoginResponse } = require("../subMethods/loginMethods");
const { generateToken } = require("../utlis/token");

// Signup
exports.signup = async (req, res) => {
  try {
    let message;
console.log("res",req.body)
    const validatedData = await validateSignupData(req.body);

    if (validatedData.role === "provider") {
      let aadharBuffer = null;

      if (!req.file) {
        return res
          .status(400)
          .json({ message: "Aadhaar file is required for provider role" });
      }
      const file = req.file;

      // Optional: Check file name contains “aadhaar”
      if (!file.originalname.toLowerCase().includes("aadhaar")) {
        return res.status(400).json({
          message: 'pls change the file name to "aadhaar.pdf", then upload',
        });
      }
      aadharBuffer = file.buffer;
      message = await createProvider(validatedData, aadharBuffer);
    } else {
      message = await createUser(validatedData);
    }

    return res.status(201).json({ message });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
console.log("sss",req.body)
    const account = await Account.findOne({ where: { email } });
    if (!account) return res.status(404).json({ message: "User not found" });

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === account.password;
    if (!isMatch) return res.status(401).json({ message: "Invalid Password" });

    const token = generateToken(account);

    account.status = true;
    await account.save();
    // Log the updated account status
    console.log("account", account);
    const response = await handleLoginResponse(account);

    res.status(201).json({
      ...response,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error in login", logged: false });
  }
};

exports.logout = async (req, res) => {
  try {
    const { dataValues } = req.user; // Extracted from authMiddleware

    await Account.update(
      { status: false },
      { where: { account_id: dataValues.account_id } }
    );

    res.status(200).json({ message: "Logout successful", logged: false });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error in logout", logged: true });
  }
};

exports.alreadyLoggedIn = async (req, res) => {
  try {
    const { dataValues } = req.user;
    const response = await handleLoginResponse(dataValues);

    res.status(200).json({
      message: `${dataValues.full_name} is already logged in`,
      logged: true,
      user: response.user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error in checking login status",
      logged: false,
    });
  }
};
