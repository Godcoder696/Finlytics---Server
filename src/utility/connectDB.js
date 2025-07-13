import mongoose from "mongoose";
import { DB_URI } from "../constants";


async function connectDB() {
    try {
        const db= await mongoose.connect(DB_URI);

        console.log(`Database connected to ${db.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;