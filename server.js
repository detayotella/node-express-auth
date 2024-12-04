import { configDotenv } from "dotenv";
import express from "express"; 
import { connectToDB } from "./database/db.js";
import { router as authRoutes } from "./routes/auth-routes.js";
import { router as homeRoutes } from "./routes/home-routes.js";
import { router as adminRoutes } from "./routes/admin-routes.js";
import { router as  uploadImageRoutes} from "./routes/image-routes.js";

configDotenv(); 

// MongoDB connection
connectToDB(); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(express.json()); 

app.use("/api/auth", authRoutes); 
app.use("/api/home", homeRoutes);  
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);  

app.listen(PORT, () => {
    console.log(`Server is now running to PORT ${PORT}`); 
})