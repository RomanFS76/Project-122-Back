import { Router } from 'express';
import { getWeek,getUserWeek } from '../controllers/weeksController.js';

const router = Router();

router.get('/weeks', getWeek);
router.get('/weeks/user-week', getUserWeek);

export default router;
