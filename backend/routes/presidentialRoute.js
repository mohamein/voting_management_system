import express from 'express';
import {
  createVote,
  deleteVote,
  getAllVotesWithUsers,
  updateVote,
  viewKulmiye,
  viewUcid,
  viewWaddani,
} from '../controllers/presidentialController.js';
import { checkIfUserLogged, isAdmin } from '../middleware/middleware.js';
import upload from '../upload/multer.js';
const router = express.Router();

router.post('/presidential', upload.single('file'), createVote);
router.get('/', getAllVotesWithUsers);
router.get('/kulmiye', viewKulmiye);
router.get('/waddani', viewWaddani);
router.get('/ucid', viewUcid);
router.delete('/:id', isAdmin, deleteVote);
router.put('/:id', isAdmin, updateVote);

export default router;
