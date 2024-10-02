import express from 'express';
import { createStation, getStations } from '../controllers/placeController.js';
import { checkIfUserLogged } from '../middleware/middleware.js';

const router = express.Router();

router.post('/create', createStation);
router.get('/', getStations);

export default router;
