import express from 'express';

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"get profile route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"create profile route"});
});

router.put("/",(req,res)=>{
    res.json({msg:"update profile route"});
});

export default router;