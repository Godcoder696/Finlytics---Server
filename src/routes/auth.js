import express from 'express'
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/login', verifyToken, (req, res) => {
  res.send('Login route');
});

router.get('/signup', (req, res) => {
  res.send('Sign Up route');
});

export default router;