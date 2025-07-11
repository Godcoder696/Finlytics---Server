import express from 'express';

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"budget route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"budget route"});
});

router.put("/",(req,res)=>{
    res.json({msg:"budget route"});
});

router.delete("/",(req,res)=>{
    res.json({msg:"budget route"});
});

export default router;