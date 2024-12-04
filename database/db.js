import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv(); 

export const connectToDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        ); 
        console.log(`MongoDB connected successfully`); 
    } catch(e) {
        console.log(`MongoDB connection failed`); 
        process.exit(1); 
    }
} 