import {celebrate} from "celebrate";
import {Router} from 'express';
import { diarySchema } from "../validations/diariesValidation.js";
import { getDiaryById } from "../controllers/diariesController.js";

export const diariesRoutes = Router();

//diariesRoutes.use('/diaries', authenticate);

diariesRoutes.get('/diaries',  );
diariesRoutes.get('/diaries/:diaryId', celebrate(diarySchema),getDiaryById );
diariesRoutes.post('/diaries', celebrate(), );
diariesRoutes.patch('/diaries/:diaryId', celebrate(), );
diariesRoutes.delete('/diaries/:diaryId', celebrate(), );
