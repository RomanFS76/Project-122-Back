import { Joi, Segments } from 'celebrate';
import { GENDER } from "../constants/gender";
import { ONE_WEEK } from '../constants/time';

export const registerSchema =  {
  [Segments.Body] : Joi.object({
name : Joi.string().max(32).required(),
email : Joi.string().email().max(64).required(),
password : Joi.string().min(8).max(128).required(),
gender : Joi.string().valid(...GENDER),
dueDate : Joi.date().iso().min( new Date(now + ONE_WEEK)).max(new Date (now + 40 * ONE_WEEK)),
  })
};
