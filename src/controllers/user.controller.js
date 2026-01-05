import User from "../models/user.models.js";
import asyncHandler from "../utils/AsyncHandler.js";


const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        success: true,
        message: "User registered successfully"
    });
})

export {registerUser};