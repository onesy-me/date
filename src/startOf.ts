import AmauiDate, { TTimeUnits } from './amaui-date';

export default function startOf(amauiDate_: AmauiDate = AmauiDate.amauiDate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauiDate_ &&
    amauiDate_.valid
  ) {
    const amauiDate = new AmauiDate(amauiDate_);

    switch (unit) {
      case 'second':
        return new AmauiDate(amauiDate.value.setMilliseconds(0));
      case 'minute':
        return new AmauiDate(amauiDate.value.setSeconds(0, 0));
      case 'hour':
        return new AmauiDate(amauiDate.value.setMinutes(0, 0, 0));
      case 'day':
        return new AmauiDate(amauiDate.value.setHours(0, 0, 0, 0));
      case 'month':
        return new AmauiDate(new Date(amauiDate.value.setDate(1)).setHours(0, 0, 0, 0));
      case 'year':
        return new AmauiDate(new Date(amauiDate.value.setMonth(0, 1)).setHours(0, 0, 0, 0));
      default:
        break;
    }
  }
}
