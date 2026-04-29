import createHttpError from 'http-errors';
import {
  DEFAULT_WEEK_NUMBER,
} from '../constants/pregnancy.js';
import { Week } from '../models/week.js';
import { calculateCurrentWeek } from '../utils/calculateCurrentWeek .js';
import { calculateDayOfWeek } from '../utils/calculateDayOfWeek.js';
import { calculateDaysToDelivery } from '../utils/calculateDaysToDelivery.js';

export const getWeek = async (req, res) => {
  const daysToDelivery = calculateDaysToDelivery(null, DEFAULT_WEEK_NUMBER);

  const week = await Week.findOne({ weekNumber: 1 }).lean();
  const { momDailyTips, ...weekData } = week;
  const momDailyTip = momDailyTips?.[0];

  res.status(200).json({
    ...weekData,
    momDailyTip,
    daysToDelivery,
  });
};

export const getUserWeek = async (req, res) => {
  const dueDate = '2026-05-11'; /*from user*/

  if (!dueDate) {
    throw createHttpError(404, 'DueDate not found');
  }

  const daysToDelivery = calculateDaysToDelivery(dueDate);
  const weekNumber = dueDate ? calculateCurrentWeek(daysToDelivery) : 1;
  const weekUser = await Week.findOne({ weekNumber }).lean();
  const dayOfWeek = dueDate ? calculateDayOfWeek(daysToDelivery) : 1;
  const { momDailyTips, ...weekData } = weekUser;
  const momDailyTip = momDailyTips?.[dayOfWeek - 1] ?? null;

  res.status(200).json({
    ...weekData,
    momDailyTip,
    daysToDelivery,
  });
};
