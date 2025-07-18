import mongoose from "mongoose";


mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    credit: {
        type: Number,
        default: 0
    },
    debit: {
        type: Number,
        default: 0
    },
    forecastData: {
        type: Object,
        default: {}
    }
})


