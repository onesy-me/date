import AmauiDate, { TTimeUnits } from './amaui-date';

export default function add(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauidate.value.setMilliseconds(amauidate.millisecond + value));
      case 'second':
        return new AmauiDate(amauidate.value.setSeconds(amauidate.second + value));
      case 'minute':
        return new AmauiDate(amauidate.value.setMinutes(amauidate.minute + value));
      case 'hour':
        return new AmauiDate(amauidate.value.setHours(amauidate.hour + value));
      case 'day':
        return new AmauiDate(amauidate.value.setDate(amauidate.day + value));
      case 'week':
        return new AmauiDate(amauidate.value.setDate(amauidate.day + (value * 7)));
      case 'month':
        return new AmauiDate(amauidate.value.setMonth(amauidate.month - 1 + value));
      case 'year':
        return new AmauiDate(amauidate.value.setFullYear(amauidate.year + value));
      default:
        break;
    }
  }
}
