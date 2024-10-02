import User from '../models/User.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
dotenv.config();
const createUser = async (req, res) => {
  const { full_name, username, email, phone, phone2, damiin, password } =
    req.body;
  try {
    if (
      full_name === '' ||
      username === '' ||
      email === '' ||
      phone === '' ||
      phone2 === '' ||
      damiin === '' ||
      password === ''
    ) {
      return res.status(403).json({ message: 'please provide all fields' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPwd = await bcrypt.hash(password, salt);
    const user = await User.create({
      full_name: full_name,
      username: username,
      email: email,
      phone: phone,
      phone2: phone2,
      damiin: damiin,
      password: hashPwd,
    });
    if (!user) {
      return res.status(403).json({ message: 'User not create' });
    }
    return res.status(201).json({ message: 'User create', user: user });
  } catch (err) {
    // throw new Error('Error at creating user');
    console.log(`Error:${err.message}`);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exists" });
    }

    if (existingUser) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid Credential' });
      }
      const token = jwt.sign(
        { username: existingUser.username, id: existingUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        sameSite: 'Strict',
      });
      return res.status(201).json({ user: existingUser, token });
    }
  } catch (err) {
    // throw new Error('Error at Login');
    console.log(`Error: ${err.message}`);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ message: 'Users Not Found' });
    }

    return res.status(200).json({ message: 'users found', users });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export { createUser, loginUser, getAllUsers };
