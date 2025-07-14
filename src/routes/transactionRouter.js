import express from 'express';
import Transactions from '../models/Transactions.js';
import { createTransaction, deleteTransaction, getAllTransactions, updateTransaction } from '../controllers/transactionController.js';

const router= express.Router();


router.get("/",getAllTransactions);

router.post("/add",createTransaction);

router.put("/",updateTransaction);

router.delete("/:transactionId",deleteTransaction);

export default router;