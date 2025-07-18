import { Users } from "../models/User.js"
import connectDB from "../utility/connectDB.js"


export const logInService= async(userEmail)=>{
    try {
        await connectDB();
        const user= Users.findOne({ email: userEmail });

        return user;
    } catch (error) {
        console.log(error);
        return {
            message: error.message,
            success: false,
        };
    }
}

export const signUpService= async(userData)=>{
    try {
        await connectDB();
        const user= await Users.create(userData);

        return user;
    }
    catch (error) {
        console.log(error);
        return {
            message: error.message,
            success: false,
        };
    }
}