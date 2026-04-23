import {celebrate} from "celebrate";
import {Router} from 'express';


export const diariesRoutes = Router();

//diariesRoutes.use('/diaries', authenticate);

diariesRoutes.get('/diaries', celebrate(diarySchema), );
diariesRoutes.get('/diaries/:diaryId', celebrate(diarySchema), );
diariesRoutes.post('/diaries', celebrate(diarySchema), );
diariesRoutes.patch('/diaries/:diaryId', celebrate(diarySchema), );
diariesRoutes.delete('/diaries/:diaryId', celebrate(diarySchema), );
