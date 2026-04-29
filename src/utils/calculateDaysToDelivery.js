
import { differenceInCalendarDays } from 'date-fns';
import {
  PREGNANCY_TOTAL_WEEKS,
  DAYS_PER_WEEK,
} from '../constants/pregnancy.js';

export const calculateDaysToDelivery =(dueDate=null,currentWeek=1)=>{
  if (dueDate) {
    return Math.max(
      0,
      differenceInCalendarDays(new Date(dueDate), new Date()),   );
  }


  return Math.max(
    0,
    (PREGNANCY_TOTAL_WEEKS - currentWeek) * DAYS_PER_WEEK,
  );
};
