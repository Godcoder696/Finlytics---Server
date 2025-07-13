import mongoose from "mongoose";


const Transactions= mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
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
        required: true
    },
    transactionMonth: {
        type: Date
    },
    transactionYear: {
        type: String
    },
    tag: {
        type: String
    },
    transactionTime: {
        type: String,
        default: Date.now()
    }
});

export default mongoose.model("Transactions",Transactions);