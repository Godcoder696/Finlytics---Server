import mongoose from "mongoose"

const Budget= mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    threshold: {
        type: Number,
        required: true
    },
    tag: {
        type: String
    }
})


export default mongoose.model("Budget",Budget);