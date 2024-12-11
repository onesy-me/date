import clamp from '@onesy/utils/clamp';

import OnesyDate, { TTimeUnits } from './OnesyDate';
import add from './add';

export default function set(value: number, unit: TTimeUnits, onesyDate_: OnesyDate = OnesyDate.onesyDate): OnesyDate {
  if (
    onesyDate_ &&
    onesyDate_.valid
  ) {
    const onesyDate = new OnesyDate(onesyDate_);

    switch (unit) {
      case 'millisecond':
        return new OnesyDate(onesyDate.value.setMilliseconds(value));
      case 'milliseconds':
        return new OnesyDate(value);
      case 'second':
        return new OnesyDate(onesyDate.value.setSeconds(value));
      case 'minute':
        return new OnesyDate(onesyDate.value.setMinutes(value));
      case 'hour':
        return new OnesyDate(onesyDate.value.setHours(value));
      case 'day':
        return new OnesyDate(onesyDate.value.setDate(clamp(value, 0, 31)));
      case 'dayWeek':
        return add(clamp(value, 0, 6) - onesyDate.dayWeek, 'day', onesyDate);
      case 'dayYear':
        return add(clamp(value, 0, 366) - onesyDate.dayYear, 'day', onesyDate);
      case 'week':
        return add(value - onesyDate.week, 'week', onesyDate);
      case 'month':
        return new OnesyDate(onesyDate.value.setMonth(value));
      case 'year':
        return new OnesyDate(onesyDate.value.setFullYear(value));
      default:
        break;
    }
  }
}
