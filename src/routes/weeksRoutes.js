import { Router } from 'express';
import { getWeek } from '../controllers/weeksController.js';

const router = Router();

router.get('/weeks', getWeek);

export default router;
