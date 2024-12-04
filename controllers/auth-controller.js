import { User } from "../models/User.js";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";


// register controller
export const registerUser = async (req, res) => {
    try {
        // extract user information from request body 
        const { username, email, password, role } = req.body; 

        // check if the user is already exists in our database 
        const checkExistingUser = await User.findOne({$or: [{username}, {email}]}); 
        if (checkExistingUser) {
            return res.status(400).json({
                success: false, 
                message: "User is already exists with either with either the same username or same email. Please try with a different username or email"
            })
        }

        // hash user password 
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt); 

        // Create a new user and save in your database 
        const newlyCreatedUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            role: role || "user"
        })

        await newlyCreatedUser.save(); 

        if (newlyCreatedUser) {
            res.status(201).json({
                success: true, 
                message: "User registered successfully", 

            })
        } else {
            res.status(400).json({
                success: false, 
                message: "Unable to register user. Please try again"
            })
        }


    } catch(e) {
        console.log(e); 
        res.status(500).json({
            success: false, 
            message: "Somthing error occurred! Please try again"
        })
    }
}

// login controller
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body; 

        // find if the current user exist in database or not
        const user = await User.findOne({username}); 

        if (!user) {
            return res.status(400).json({
                success: false, 
                message: "User doesn't exists"
            })
        }

        // if the password is correct or not 
        const isPasswordMatch = await bcrypt.compare(password, user.password); 

        if (!isPasswordMatch) {
            res.status(400).json({
                success: false, 
                message: "Invalid credientials!"
            })
        }

        // create user token  
        const accessToken = jwt.sign({
            userId: user._id, 
            username: user.username, 
            role: user.role, 
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "15m"
        })

        res.status(200).json({
            success: true, 
            message: "Logged in successful", 
            accessToken
        })

    } catch(e) {
        console.log(e); 
        res.status(400).json({
            success: false, 
            message: "Something error occured! Please",
        })
    }
}

export const changePassword = async (req, res) => {
    try {
        const userId = req.userInfo.userId; 

        // Extract old and new password 
        const { oldPassword, newPassword } = req.body; 

        // find the current logged in user 
        const user = await User.findById(userId); 
 
        if (!user) {
            return res.status(400).json({
                success: false, 
                message: "User not found"
            })
        }

        // Check if the old password is correct 
        const isPasswordMatch = await bcrypt.compare(oldPassword, user.password); 

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false, 
                message: "Old password is not correct! Please try again."
            })
        }

        // hash the new password here 
        const salt = await bcrypt.genSalt(10); 
        const newHashedPassword = await bcrypt.hash(newPassword, salt); 

        // update user password 
        user.password = newHashedPassword;  
        await user.save(); 

        res.status(200).json({
            success: true, 
            message: "Password changed successfully"
        })


    } catch(e) {
        console.log(e); 
        res.status(500).json({
            success: false, 
            message: "Some error occurred! Please try again", 
        }); 
    }
}
