import { Week } from '../models/week.js';

export const getWeek = async (req, res) => {
  const week = await Week.findOne({ weekNumber: 1 });
  res.status(200).json(week);
};
