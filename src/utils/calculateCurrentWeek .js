import {
  DAYS_PER_WEEK,
  PREGNANCY_TOTAL_WEEKS,
} from '../constants/pregnancy.js';

export const calculateCurrentWeek = (daysToDelivery) => {
  const totalDays = PREGNANCY_TOTAL_WEEKS * DAYS_PER_WEEK;
  const passedDays = totalDays - daysToDelivery;
  const rawWeek = Math.floor(passedDays / DAYS_PER_WEEK) + 1;
  return Math.min(PREGNANCY_TOTAL_WEEKS, Math.max(1, rawWeek));
};
