import clamp from '@amaui/utils/clamp';

import AmauiDate, { TTimeUnits } from './amaui-date';
import add from './add';

export default function set(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauidate.value.setMilliseconds(value));
      case 'milliseconds':
        return new AmauiDate(value);
      case 'second':
        return new AmauiDate(amauidate.value.setSeconds(value));
      case 'minute':
        return new AmauiDate(amauidate.value.setMinutes(value));
      case 'hour':
        return new AmauiDate(amauidate.value.setHours(value));
      case 'day':
        return new AmauiDate(amauidate.value.setDate(clamp(value, 0, 31)));
      case 'dayWeek':
        return add(clamp(value, 0, 6) - amauidate.dayWeek, 'day', amauidate);
      case 'dayYear':
        return add(clamp(value, 0, 366) - amauidate.dayYear, 'day', amauidate);
      case 'week':
        return add(value - amauidate.week, 'week', amauidate);
      case 'month':
        return new AmauiDate(amauidate.value.setMonth(value));
      case 'year':
        return new AmauiDate(amauidate.value.setFullYear(value));
      default:
        break;
    }
  }
}
