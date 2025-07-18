import express from 'express'
import verifyToken from '../middlewares/authMiddleware.js';
import { loginController, signUpController } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', verifyToken, loginController);

router.post('/signup', verifyToken, signUpController);

export default router;