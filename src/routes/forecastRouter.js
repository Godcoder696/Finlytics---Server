import express from 'express';

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"forecast route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"forecast route"});
});

router.put("/",(req,res)=>{
    res.json({msg:"forecast route"});
});

export default router;