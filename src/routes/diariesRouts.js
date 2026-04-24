import { celebrate } from "celebrate";
import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { diaryValidation, diaryIdValidation } from '../validations/diariesValidation.js';
import { createDiary, getDiaries, getDiaryById, updateDiary, deleteDiary } from '../controllers/diariesController.js';

export const diariesRoutes = Router();

diariesRoutes.use(authenticate);

diariesRoutes.get('/diaries', getDiaries);
diariesRoutes.get('/diaries/:diaryId', celebrate(diaryIdValidation), getDiaryById);
diariesRoutes.post('/diaries', celebrate(diaryValidation), createDiary);
diariesRoutes.patch('/diaries/:diaryId', celebrate(diaryIdValidation), celebrate(diaryValidation), updateDiary);
diariesRoutes.delete('/diaries/:diaryId', celebrate(diaryIdValidation), deleteDiary);
