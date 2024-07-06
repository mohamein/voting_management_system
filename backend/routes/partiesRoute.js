import { Router } from 'express';
import { createParties, getParties } from '../controllers/partiesController.js';

const router = Router();

router.post('/createParty', createParties);
router.get('/', getParties);

export default router;
