import User from '../models/User.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.find();
    if (user.role !== 'admin') {
      res.status(403).json({ message: "You aren't authorized!" });
    }
    // req.user = user;
    next();
  } catch (err) {
    console.log(`Error:${err.message}`);
  }
};

const checkIfUserLogged = async (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export { isAdmin, checkIfUserLogged };
