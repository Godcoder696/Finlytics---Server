import Transactions from "../models/Transactions.js";
import connectDB from "../utility/connectDB.js";


export const createTransactionService= async (...data)=>{
    try {
        console.log(data);
        await connectDB();

        const transRes= await Transactions.create(...data);

        console.log(transRes);

        return {
            success: true,
            message: "Transaction created successfully",
            transRes
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error while creating transaction",
            error: error.message
        }
    }
}


export const deleteTransactionService= async (...data)=>{
    try{
        await connectDB();

        const delResponse= await Transactions.deleteOne(...data);

        console.log(delResponse);

        return {
            success: true,
            message: "Transaction deleted successfully",
            delResponse
        }
    }
    catch(error){
        console.log(error);
        return {
            success: false,
            message: "Error while deleting transaction",
            error: error.message
        }
    }
}


export const getAllTransactionsService= async (data)=>{
    try {
        await connectDB();
        const allTransactions= await Transactions.find(data);

        return {
            success: true,
            allTransactions
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error while fetching all transactions",
            error: error.message
        }
    }
}


export const updateTransactionService= async (...data)=>{
    try {
        await connectDB();
        const updateResponse= await Transactions.updateOne(...data);

        return {
            success: true,
            updateResponse
        }
    } 
    catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error while fetching all transactions",
            error: error.message
        }
    }
}