import { Schema,model } from 'mongoose';

const weekSchema = new Schema({
  analogy: {
    type: String,
  },
  weekNumber: {
    type: Number,
  },
  babySize: {
    type: Number,
  },
  babyWeight: {
    type: Number,
  },
  image: {
    type: String,
  },
  babyActivity: {
    type: String,
  },
  babyDevelopment: {
    type: String,
  },
  interestingFact: {
    type: String,
  },
  momDailyTips: {
    type: [String],
  },
});

export const Week = model('Week', weekSchema);
