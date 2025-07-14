import express from 'express'
import verifyToken from '../middlewares/authMiddleware.js';
import { loginController, signUpController } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', loginController);

router.post('/signup', signUpController);

export default router;