import AmauiDate, { TTimeUnits } from './amaui-date';

export default function startOf(amauidate: AmauiDate = AmauiDate.amauidate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'second':
        return new AmauiDate(amauidate.value.setMilliseconds(0));
      case 'minute':
        return new AmauiDate(amauidate.value.setSeconds(0, 0));
      case 'hour':
        return new AmauiDate(amauidate.value.setMinutes(0, 0, 0));
      case 'day':
        return new AmauiDate(amauidate.value.setHours(0, 0, 0, 0));
      case 'month':
        return new AmauiDate(new Date(amauidate.value.setDate(1)).setHours(0, 0, 0, 0));
      case 'year':
        return new AmauiDate(new Date(amauidate.value.setMonth(0, 1)).setHours(0, 0, 0, 0));
      default:
        break;
    }
  }
}
