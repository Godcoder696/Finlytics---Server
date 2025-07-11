import express from 'express';

const router= express.Router();


router.get("/",(req,res)=>{
    res.json({msg:"get transaction route"});
});

router.post("/",(req,res)=>{
    res.json({msg:"create transaction route"});
});

export default router;