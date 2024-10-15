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
const allowedOrigins = [
  'http://localhost:5173', // Local development
  'https://voting-management-system-sandy.vercel.app', // Production frontend
  'http://exp://192.168.172.1:8081',
  'http://localhost:8081',
  'http://192.168.172.1:8081',
];

const io = new Server(server, {
  cors: {
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        // If the origin is in the allowed list, allow the request
        callback(null, true);
      } else {
        // If the origin is not in the allowed list, block the request
        callback(new Error('Not allowed by CORS'));
      }
    }, // Allow the React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
});

socketSetup(io);

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        // If the origin is in the allowed list, allow the request
        callback(null, true);
      } else {
        // If the origin is not in the allowed list, block the request
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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
