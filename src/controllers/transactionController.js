import Transactions from "../models/Transactions.js"
import { createTransactionService, deleteTransactionService, getAllTransactionsService, updateTransactionService } from "../services/transactionService.js";
import connectDB from "../utility/connectDB.js";


export const createTransaction = async (req, res)=>{
    try {
        const { userId, transactionType, transactionAmount, tag } = req.body;

        if(userId && transactionType && transactionAmount){
            const transResponse= await createTransactionService({userId, transactionType, transactionAmount, tag});
            return res.json(transResponse);
        }

        throw Error("Provide all Arguments to create Transaction!");
    } catch (error) {
        return res.json({
            success: false,
            message: "Error while creating transaction",
            error: error.message
        })
    }
}


export const deleteTransaction = async (req, res)=>{
    try {
        const { transactionId } = req.params;

        if(transactionId){
            const delResponse= await deleteTransactionService({_id: transactionId});
            return res.json(delResponse);
        }

        throw Error("Provide all Arguments to delete Transaction!");
    } catch (error) {
        return res.json({
            success: false,
            message: "Error while deleting transaction",
            error: error.message
        })
    }
}


export const updateTransaction = async (req, res)=>{
    try {
        const { transactionId:_id, transactionType, transactionAmount, tag, transactionDate } = req.body;

        let newData= {};

        if(transactionType) newData.transactionType= transactionType;
        if(transactionAmount) newData.transactionAmount= transactionAmount;
        if(tag) newData.tag= tag;
        if(transactionDate) newData.transactionDate= transactionDate;

        if(Object.keys(newData).length===0){
            throw Error("Nothing to update!");
        }

        if(_id){
            const updateRes= await updateTransactionService({_id, ...newData});
            return res.json(updateRes);
        }

        throw Error("Provide all Arguments to update Transaction!");
    } catch (error) {
        return res.json({
            success: false,
            message: "Error while updating transaction",
            error: error.message
        })
    }
}


export const getAllTransactions = async (req, res)=>{
    try {
        const { userId } = req.body;

        if(userId){
            const transResponse= await getAllTransactionsService({userId});
            return res.json(transResponse);
        }

        throw Error("Provide all Arguments to get Transactions!");
    } catch (error) {
        return res.json({
            success: false,
            message: "Error while getting transactions",
            error: error.message
        })
    }
}