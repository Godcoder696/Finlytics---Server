import mongoose from "mongoose";


const Transaction= mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    transactionAmount: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date,
        default: Date.now()
    },
    transactionMonth: {
        type: String
    },
    transactionYear: {
        type: String
    },
    tag: {
        type: String
    }
});

const Transactions= mongoose.models.Transactions || mongoose.model("Transactions",Transaction);
export default Transactions;