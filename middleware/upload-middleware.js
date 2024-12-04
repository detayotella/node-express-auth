import multer from "multer";
import { extname } from "node:path"

// set our multer storage 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    }, 
    filename: function(req, file, cb) {
        cb(null, 
            file.fieldname + "-" + Date.now() + extname(file.originalname)
        );
    },
}); 

// file filter function
const checkFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb(new Error("Not an image! Please upload only images"))
    }
}

// multer middleware 
export const uploadMiddleware = multer({
    storage: storage, 
    fileFilter: checkFileFilter, 
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
    }, 
}); 