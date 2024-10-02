import { Router } from 'express';
import { createParties, getParties } from '../controllers/partiesController.js';
import { checkIfUserLogged } from '../middleware/middleware.js';
import upload from '../upload/multer.js';
const router = Router();

router.post(
  '/createParty',
  checkIfUserLogged,
  upload.single('file'),
  createParties
);
router.get('/', getParties);

export default router;
