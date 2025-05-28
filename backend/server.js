import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Herllo World");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
