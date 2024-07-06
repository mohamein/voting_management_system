import express from 'express';
import {
  createUser,
  loginUser,
  getAllUsers,
} from '../controllers/userControllers.js';

import { isAdmin, checkIfUserLogged } from '../middleware/middleware.js';

const router = express.Router();

router.post('/create', createUser);
router.get('/', getAllUsers);
router.post('/login', loginUser);

export default router;
