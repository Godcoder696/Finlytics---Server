import mongoose from "mongoose";

const User= mongoose.Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        default: null
    },
    avatar: {
        type: String,
        default: null
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
        type: String,
        default: null
    },
    salary: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    lineOfWork: {
        type: String,
        default: null
    }
})

const Users= mongoose.models.User || mongoose.model("User",User);
export {Users};