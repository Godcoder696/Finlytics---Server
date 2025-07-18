import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import { deleteProfile, getProfile, updateProfile } from '../controllers/profileController.js';

const router= express.Router();

router.get("/",verifyToken, getProfile);

router.delete("/",verifyToken, deleteProfile);

router.put("/",verifyToken, updateProfile);

export default router;