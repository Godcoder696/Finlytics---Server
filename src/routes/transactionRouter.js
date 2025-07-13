import express from 'express';
import Transactions from '../models/Transactions.js';

const router= express.Router();


router.get("/",(req,res)=>{
    res.json({msg:"get transaction route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"create transaction route"});
});

export default router;