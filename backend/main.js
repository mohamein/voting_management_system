import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// Local files
import connectToDb from '../backend/config/dbConnection.js';
import userRouter from '../backend/routes/userRoute.js';
import presidentialRoute from '../backend/routes/presidentialRoute.js';
dotenv.config();
const app = express();

app.use(cors({ credential: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('images'));

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/votes', presidentialRoute);
// PORT
const PORT = process.env.PORT || 8080;

connectToDb();
app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
