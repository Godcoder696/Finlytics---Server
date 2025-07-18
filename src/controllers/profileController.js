import { deleteUserProfile, fetchUserProfile, updateUserProfile } from "../services/profileService.js";


export const getProfile= async (req, res)=>{
    try {
        const {email}= req.user;

        if (!email) throw Error("User not found.");

        const {userProfile, success, error}= await fetchUserProfile(email);

        if(!success) throw Error(error);

        return res.status(200).json({response: userProfile, success: true});
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message, success: false});
    }
}

export const updateProfile= async (req, res)=>{
    try {
        const {email}= req.user;
        const {data}= req.body;

        if (!email) throw Error("1 or more required arguments missing.");

        const {updateUser, success, error}= await updateUserProfile(email, data);

        if(!success) throw Error(error);

        return res.status(200).json({response: updateUser, success: true});
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message, success: false});
    }
}

export const deleteProfile= async (req, res)=>{
    try {
        const {email}= req.user;

        if (!email) throw Error("User not found.");

        const {deleteUser, success, error}= await deleteUserProfile(email);

        if(!success) throw Error(error);

        return res.status(200).json({response: deleteUser, success: true});
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message, success: false});
    }
}