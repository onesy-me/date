import { clamp } from '@amaui/utils';

import AmauiDate, { TTimeUnits } from './AmauiDate';
import endOf from './endOf';

export default function add(value: number, unit: TTimeUnits, amauiDate_: AmauiDate = AmauiDate.amauiDate): AmauiDate {
  if (
    amauiDate_ &&
    amauiDate_.valid
  ) {
    const amauiDate = new AmauiDate(amauiDate_);

    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauiDate.value.setMilliseconds(amauiDate.millisecond + value));
      case 'second':
        return new AmauiDate(amauiDate.value.setSeconds(amauiDate.second + value));
      case 'minute':
        return new AmauiDate(amauiDate.value.setMinutes(amauiDate.minute + value));
      case 'hour':
        return new AmauiDate(amauiDate.value.setHours(amauiDate.hour + value));
      case 'day':
        return new AmauiDate(amauiDate.value.setDate(amauiDate.day + value));
      case 'week':
        return new AmauiDate(amauiDate.value.setDate(amauiDate.day + (value * 7)));
      case 'month':
        // Get middle of month to move to
        // and its endOf month,
        // move to that months actual day or last day
        let day = amauiDate.day;

        let month = new AmauiDate(amauiDate.value.setDate(15));

        month = new AmauiDate(amauiDate.value.setMonth(amauiDate.month - 1 + value));

        const monthEnd = endOf(month, 'month');

        day = clamp(day, 0, monthEnd.day);

        month.value.setDate(day);

        month = new AmauiDate(month.value);

        return month;
      case 'year':
        return new AmauiDate(amauiDate.value.setFullYear(amauiDate.year + value));
      default:
        break;
    }
  }
}
