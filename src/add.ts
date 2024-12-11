import { clamp } from '@onesy/utils';

import OnesyDate, { TTimeUnits } from './OnesyDate';
import endOf from './endOf';

export default function add(value: number, unit: TTimeUnits, onesyDate_: OnesyDate = OnesyDate.onesyDate): OnesyDate {
  if (
    onesyDate_ &&
    onesyDate_.valid
  ) {
    const onesyDate = new OnesyDate(onesyDate_);

    switch (unit) {
      case 'millisecond':
        return new OnesyDate(onesyDate.value.setMilliseconds(onesyDate.millisecond + value));
      case 'second':
        return new OnesyDate(onesyDate.value.setSeconds(onesyDate.second + value));
      case 'minute':
        return new OnesyDate(onesyDate.value.setMinutes(onesyDate.minute + value));
      case 'hour':
        return new OnesyDate(onesyDate.value.setHours(onesyDate.hour + value));
      case 'day':
        return new OnesyDate(onesyDate.value.setDate(onesyDate.day + value));
      case 'week':
        return new OnesyDate(onesyDate.value.setDate(onesyDate.day + (value * 7)));
      case 'month':
        // Get middle of month to move to
        // and its endOf month,
        // move to that months actual day or last day
        let day = onesyDate.day;

        let month = new OnesyDate(onesyDate.value.setDate(15));

        month = new OnesyDate(onesyDate.value.setMonth(onesyDate.month - 1 + value));

        const monthEnd = endOf(month, 'month');

        day = clamp(day, 0, monthEnd.day);

        month.value.setDate(day);

        month = new OnesyDate(month.value);

        return month;
      case 'year':
        return new OnesyDate(onesyDate.value.setFullYear(onesyDate.year + value));
      default:
        break;
    }
  }
}
