import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import http from 'http';
import { socketSetup } from '../backend/config/socket.js';
// Local files
import connectToDb from '../backend/config/dbConnection.js';
import userRouter from '../backend/routes/userRoute.js';
import presidentialRoute from '../backend/routes/presidentialRoute.js';
import partiesRoute from '../backend/routes/partiesRoute.js';
import otpRoute from '../backend/routes/otpRoute.js';
import placeRoute from '../backend/routes/placeRoute.js';
dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

socketSetup(io);

app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('images'));

app.use((req, res, next) => {
  req.io = io;

  next();
});

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/votes', presidentialRoute);
app.use('/api/v1/parties', partiesRoute);
app.use('/api/v1/places', placeRoute);
app.use('/api/v1/otp', otpRoute);
// PORT
const PORT = process.env.PORT || 8080;

connectToDb();
server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
