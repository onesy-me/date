import clamp from '@amaui/utils/clamp';

import AmauiDate, { TTimeUnits } from './amaui-date';
import add from './add';

export default function set(value: number, unit: TTimeUnits, amauiDate_: AmauiDate = AmauiDate.amauiDate): AmauiDate {
  if (
    amauiDate_ &&
    amauiDate_.valid
  ) {
    const amauiDate = new AmauiDate(amauiDate_);

    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauiDate.value.setMilliseconds(value));
      case 'milliseconds':
        return new AmauiDate(value);
      case 'second':
        return new AmauiDate(amauiDate.value.setSeconds(value));
      case 'minute':
        return new AmauiDate(amauiDate.value.setMinutes(value));
      case 'hour':
        return new AmauiDate(amauiDate.value.setHours(value));
      case 'day':
        return new AmauiDate(amauiDate.value.setDate(clamp(value, 0, 31)));
      case 'dayWeek':
        return add(clamp(value, 0, 6) - amauiDate.dayWeek, 'day', amauiDate);
      case 'dayYear':
        return add(clamp(value, 0, 366) - amauiDate.dayYear, 'day', amauiDate);
      case 'week':
        return add(value - amauiDate.week, 'week', amauiDate);
      case 'month':
        return new AmauiDate(amauiDate.value.setMonth(value));
      case 'year':
        return new AmauiDate(amauiDate.value.setFullYear(value));
      default:
        break;
    }
  }
}
