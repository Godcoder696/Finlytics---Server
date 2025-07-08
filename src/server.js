import express from 'express';
import auth from './routes/auth.js'

const app = express();

// use json as body parser
app.use(express.json());

// base routes
app.use("/auth",auth);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

