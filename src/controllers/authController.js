import { logInService, signUpService } from "../services/authService.js";


export const signUpController= async (req, res)=>{
    try {
        const {email, picture, name}= req.user;

        const createUserRes= await signUpService({email, name, avatar: picture});

        if(createUserRes.message && createUserRes.message.includes("E11000")) return res.status(400).json({ message: "User already exists", success: false });

        return res.json({
            message: "User created successfully",
            success: true,
            user: createUserRes
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
    }
}

export const loginController= async (req, res)=>{
    try {
        console.log(req.user.email);
        const email= req.user.email;

        const logInRes= await logInService(email);

        if(!logInRes) return res.status(404).json({ message: "User not found", success: false });

        return res.json({
            message: "Login successful",
            success: true,
            user: logInRes
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
    }
}