import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords dont match" });

    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ error: "Username already exists" });

    const boyProfilePic = "https://avatar.iran.liara.run/public/boy";
    const girlProfilePic = "https://avatar.iran.liara.run/public/girl";

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in Signing up controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
  res.send("Signup ROUTE");
};

export const loginUser = (req, res) => {
  res.send("LOGIN ROUTE");
};

export const logoutUser = (req, res) => {
  res.send("Logout ROUTE");
};
