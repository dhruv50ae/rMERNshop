import express from "express";

const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
