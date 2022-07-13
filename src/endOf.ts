import AmauiDate, { TTimeUnits } from './amaui-date';

export default function endOf(amauidate: AmauiDate = AmauiDate.amauidate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'second':
        return new AmauiDate(amauidate.value.setMilliseconds(999));
      case 'minute':
        return new AmauiDate(amauidate.value.setSeconds(59, 999));
      case 'hour':
        return new AmauiDate(amauidate.value.setMinutes(59, 59, 999));
      case 'day':
        return new AmauiDate(amauidate.value.setHours(23, 59, 59, 999));
      case 'month':
        return new AmauiDate(new Date(amauidate.value.setMonth(amauidate.month, 0)).setHours(23, 59, 59, 999));
      case 'year':
        return new AmauiDate(new Date(amauidate.value.setMonth(12, 0)).setHours(23, 59, 59, 999));
      default:
        break;
    }
  }
}
