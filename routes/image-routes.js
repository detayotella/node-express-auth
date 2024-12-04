import express from "express"; 
import { authMiddleware } from "../middleware/auth-middleware.js";
import { isAdminUser as adminMiddleware } from "../middleware/admin-middleware.js";
import { uploadMiddleware } from "../middleware/upload-middleware.js";
import { deleteImageController, fetchImagesController, uploadImage as uploadImageController } from "../controllers/image-controller.js";

export const router = express.Router(); 

// upload the image 
router.post("/upload",  
    authMiddleware, 
    adminMiddleware, 
    uploadMiddleware.single("image"), 
    uploadImageController)

// to get all the image
router.get("/get", authMiddleware, fetchImagesController);

router.delete("/delete/:id", 
    authMiddleware, 
    adminMiddleware, 
    deleteImageController); 