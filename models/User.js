import mongoose from "mongoose";
const { Schema, model } = mongoose

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true, 
    }, 
    password: {
        type: String, 
        required: true
    }, 
    role: {
        type: String, 
        enum: ["user", "admin"], // only allow "user" or "admin"
        default: "user"
    }

}, {timestamps: true})

export const User = model("User", UserSchema); 