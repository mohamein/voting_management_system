import { Router } from 'express';
import { createParties, getParties } from '../controllers/partiesController.js';
import upload from '../upload/multer.js';
const router = Router();

router.post('/createParty', upload.single('file'), createParties);
router.get('/', getParties);

export default router;
