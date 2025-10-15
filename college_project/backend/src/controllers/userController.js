const { Account } = require("../models/associations");

exports.updatePassword = async (req, res) => {
  try {
    const { userId, newPassword } = req.body;
    // 1. Validate input
    if (!userId || !newPassword) {
      return res
        .status(400)
        .json({ message: "userId and newPassword are required." });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }
    // 2. Find user by ID
    const user = await Account.findOne({ where: { account_id: userId} });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. pls provide correct userId." });
    }

    // 3. Check if new password is different
    if (user.password === newPassword) {
      return res
        .status(400)
        .json({ message: "New password must be different from the old one." });
    }

    if (user.role !== "user") {
      return res
        .status(403)
        .json({ message: "Only users with role 'user' can update password." });
    }
    // 5. Update password in DB
    user.password = newPassword;
    await user.save();

    // 6. Respond with success
    const reFetchedUser = await Account.findOne({
      where: { account_id: userId },
    });

    const { full_name, email, role, location, phone_no, status, password } =
      reFetchedUser;

    let updatedUser = {
      full_name,
      email,
      role,
      location,
      phone_no,
      status,
      password,
    };

    res.json({
      message: `Password updated successfully for ${full_name}`,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
