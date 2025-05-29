import express from "express";
import { getSideBarUsers } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getSideBarUsers);

export default router;
