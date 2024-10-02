import express from 'express';
import { createStation, getStations } from '../controllers/placeController.js';
import { checkIfUserLogged } from '../middleware/middleware.js';

const router = express.Router();

router.post('/create', checkIfUserLogged, createStation);
router.get('/', checkIfUserLogged, getStations);

export default router;
