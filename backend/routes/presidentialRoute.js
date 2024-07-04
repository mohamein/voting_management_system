import express from 'express';
import {
  createVote,
  deleteVote,
  getAllVotesWithUsers,
  updateVote,
} from '../controllers/presidentialController.js';
import { isAdmin } from '../middleware/middleware.js';
const router = express.Router();

router.post('/presidential', createVote);
router.get('/', getAllVotesWithUsers);
router.delete('/:id', isAdmin, deleteVote);
router.put('/:id', isAdmin, updateVote);

export default router;
