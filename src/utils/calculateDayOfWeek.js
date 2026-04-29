import { DAYS_PER_WEEK, TOTAL_DAYS } from '../constants/pregnancy.js';

export const calculateDayOfWeek = (daysToDelivery) => {
  const passedDays = TOTAL_DAYS - daysToDelivery;
  const rawDay = passedDays % DAYS_PER_WEEK || DAYS_PER_WEEK;
  return Math.min(DAYS_PER_WEEK, Math.max(1, rawDay));
};
