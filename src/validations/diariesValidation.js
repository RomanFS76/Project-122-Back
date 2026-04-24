import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';


export const objectSchema = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};


export const diaryValidation ={
[Segments.BODY] : Joi.object ({
  title : Joi.string().min(1).max(64).required(),
  description : Joi.string().min(1).max(1000).required(),
  date : Joi.date().iso().optional(),
  emotions : Joi.array().items(Joi.string().min(1).max(12)).required(),
})
};

export const diaryIdValidation = {
  [Segments.PARAMS]: Joi.object({
    diaryId: Joi.string().custom(objectSchema).required(),
  }),
};
