import AmauiDate, { TTimeUnits } from './AmauiDate';

// circular dependency issue fix
function add(value: number, unit: TTimeUnits, amauiDate_: AmauiDate = AmauiDate.amauiDate): AmauiDate {
  if (
    amauiDate_ &&
    amauiDate_.valid
  ) {
    const amauiDate = new AmauiDate(amauiDate_);

    switch (unit) {
      case 'day':
        return new AmauiDate(amauiDate.value.setDate(amauiDate.day + value));
    }
  }
}

export default function endOf(amauiDate_: AmauiDate = AmauiDate.amauiDate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauiDate_ &&
    amauiDate_.valid
  ) {
    const amauiDate = new AmauiDate(amauiDate_);

    switch (unit) {
      case 'second':
        return new AmauiDate(amauiDate.value.setMilliseconds(999));
      case 'minute':
        return new AmauiDate(amauiDate.value.setSeconds(59, 999));
      case 'hour':
        return new AmauiDate(amauiDate.value.setMinutes(59, 59, 999));
      case 'day':
        return new AmauiDate(amauiDate.value.setHours(23, 59, 59, 999));
      case 'week':
        return endOf(add(7 - amauiDate.dayWeek, 'day'), 'day');
      case 'month':
        return new AmauiDate(new Date(amauiDate.value.setMonth(amauiDate.month, 0)).setHours(23, 59, 59, 999));
      case 'year':
        return new AmauiDate(new Date(amauiDate.value.setMonth(12, 0)).setHours(23, 59, 59, 999));
      default:
        break;
    }
  }
}
