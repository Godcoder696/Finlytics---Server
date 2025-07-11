import express from 'express';

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"notification route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"create notification route"});
});

export default router;