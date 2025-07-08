import express from 'express'
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/login', verifyToken, (req, res) => {
  res.json({ message: 'Login route' });
});

router.get('/signup', verifyToken, (req, res) => {
  res.json({ message: 'Signup route' });
});

export default router;