import mongoose from "mongoose";

const User= mongoose.Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    budgetAlertt: {
        type: Boolean,
        default: false
    },
    monthlyReport: {
        type: Boolean,
        default: false
    },
    profession: {
        type: String
    },
    salary: {
        type: Number
    },
    description: {
        type: String
    },
    lineOfWork: {
        type: String
    }
})

const Users= mongoose.models.User || mongoose.model("User",User);
export {Users};