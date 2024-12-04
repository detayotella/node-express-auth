import express from "express"; 
import { authMiddleware } from "../middleware/auth-middleware.js";
import { isAdminUser as adminMiddleware } from "../middleware/admin-middleware.js";


export const router = express.Router();

router.get("/welcome", authMiddleware, adminMiddleware, (req, res) => {
    res.json({
        mesage: "Welcome to the admin page"
    })
})