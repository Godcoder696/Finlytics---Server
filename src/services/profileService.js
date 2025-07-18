import { Users } from "../models/User.js";
import connectDB from "../utility/connectDB.js";


export const fetchUserProfile= async (email)=>{
    try {
        await connectDB();

        const userProfile= await Users.findOne({email});

        return {userProfile, success: true};
    } catch (error) {
        console.log(error);
        return {error:error.message, success: false};
    }
}

export const updateUserProfile= async (email, data)=>{
    try {
        await connectDB();

        const userProfile= await Users.findOne({email});

        const updateUser= await Users.findOneAndUpdate({email: email},{
            name: data?.name || userProfile.name,
            userName: data?.userName || userProfile.userName,
            phoneNumber: data?.phoneNumber || userProfile.phoneNumber,
            avatar: data?.avatar || userProfile.avatar,
            budgetAlertt: data?.budgetAlertt || userProfile.budgetAlertt,
            monthlyReport: data?.monthlyReport || userProfile.monthlyReport,
            profession: data?.profession || userProfile.profession,
            salary: data?.salary || userProfile.salary,
            description: data?.description || userProfile.description,
            lineOfWork: data?.lineOfWork || userProfile.lineOfWork
        });



        return {updateUser, success: true};
    }
    catch (error) {
        console.log(error);
        return {error:error.message, success: false};
    }
}

export const deleteUserProfile= async (email)=>{
    try {
        await connectDB();

        const deleteUser= await Users.findOneAndDelete({email});

        return {deleteUser, success: true};
    }
    catch (error) {
        console.log(error);
        return {error:error.message, success: false};
    }
}