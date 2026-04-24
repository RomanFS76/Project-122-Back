import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

export const diarySchema = new mongoose.Schema({

title :{
type : String,
minLength: 1,
maxLength: 64,
required: true,
trim : true
},
description :{
  type: String,
  minLength: 1,
  maxLength: 1000,
  required:true,
  trim : true,
},
date:{
  type: Date,
  default: Date.now,
},
  emotions :{
    type : String,
    minLength: 1,
    maxLength: 12,
    required: true,
},
},
{timestamps : true},);

export const Diary= model('Diary', diarySchema);
