import express from 'express';
import authRouter from './routes/authRouter.js'
import notificationRouter from './routes/notificationRouter.js'
import profileRouter from './routes/profileRouter.js'
import summaryRouter from './routes/summaryRouter.js'
import forecastRouter from './routes/forecastRouter.js'
import transactionRouter from './routes/transactionRouter.js'
import budgetRouter from './routes/budgetRouter.js'
import { PORT } from './constants.js';
import connectDB from './utility/connectDB.js';

const app = express();

// use json as body parser
app.use(express.json());

// base routes
app.use("/auth",authRouter);
app.use("/profile",profileRouter);
app.use("/notification",notificationRouter);
app.use("/summary",summaryRouter);
app.use("/budget",budgetRouter);
app.use("/forecast",forecastRouter);
app.use("/transaction",transactionRouter);

app.listen(PORT, async () => {
  console.log('Server is running on port ' + PORT);
  // await connectDB();
});

