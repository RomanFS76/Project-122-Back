import {celebrate} from "celebrate";
import {Router} from 'express';
import { registerSchema } from "../validations/authValidation";

export const authRouts = Router();

authRouts.post('/auth/register', celebrate(registerSchema),);
