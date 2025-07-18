import express from 'express';
import authRouter from './routes/authRouter.js'
import notificationRouter from './routes/notificationRouter.js'
import profileRouter from './routes/profileRouter.js'
import analyticsRouter from './routes/analyticsRouter.js'
import transactionRouter from './routes/transactionRouter.js'
import budgetRouter from './routes/budgetRouter.js'
import { PORT } from './constants.js';

const app = express();

// use json as body parser
app.use(express.json());

// base routes
app.use("/auth",authRouter);
app.use("/profile",profileRouter);
app.use("/notification",notificationRouter);
app.use("/analytics",analyticsRouter);
app.use("/budget",budgetRouter);
app.use("/transaction",transactionRouter);

app.listen(PORT, async () => {
  console.log('Server is running on port ' + PORT);
});

