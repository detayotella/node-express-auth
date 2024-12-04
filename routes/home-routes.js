import express from "express"; 
import { authMiddleware } from "../middleware/auth-middleware.js";

export const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
    const {username, userId, role} = req.userInfo; 

    res.json({
        message: "Welcome to the homepage", 
        user: {
            _id: userId, 
            username, 
            role, 
        }
    })
}); 
