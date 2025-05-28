import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day1 in milliseconds
    httpOnly: true, // Prevent access via JS
    sameSite: "strict", // CSRF protection
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
