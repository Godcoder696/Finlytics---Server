import express from 'express';

const router= express.Router();


router.get("/",(req,res)=>{
    res.json({msg:"generate summary route"});
});

router.put("/",(req,res)=>{
    res.json({msg:"update summary route"});
});

export default router;