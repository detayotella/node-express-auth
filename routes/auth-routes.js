import express from "express"; 
import { registerUser, loginUser, changePassword } from "../controllers/auth-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

export const router = express.Router();  


// all routes are related to authentication & authorization
router.post("/register", registerUser); 
router.post("/login", loginUser); 
router.post("/change-password", authMiddleware, changePassword); 