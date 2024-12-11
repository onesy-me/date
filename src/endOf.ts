import OnesyDate, { TTimeUnits } from './OnesyDate';

// circular dependency issue fix
function add(value: number, unit: TTimeUnits, onesyDate_: OnesyDate = OnesyDate.onesyDate): OnesyDate {
  if (
    onesyDate_ &&
    onesyDate_.valid
  ) {
    const onesyDate = new OnesyDate(onesyDate_);

    switch (unit) {
      case 'day':
        return new OnesyDate(onesyDate.value.setDate(onesyDate.day + value));
    }
  }
}

export default function endOf(onesyDate_: OnesyDate = OnesyDate.onesyDate, unit: TTimeUnits = 'day'): OnesyDate {
  if (
    onesyDate_ &&
    onesyDate_.valid
  ) {
    const onesyDate = new OnesyDate(onesyDate_);

    switch (unit) {
      case 'second':
        return new OnesyDate(onesyDate.value.setMilliseconds(999));
      case 'minute':
        return new OnesyDate(onesyDate.value.setSeconds(59, 999));
      case 'hour':
        return new OnesyDate(onesyDate.value.setMinutes(59, 59, 999));
      case 'day':
        return new OnesyDate(onesyDate.value.setHours(23, 59, 59, 999));
      case 'week':
        return new OnesyDate(endOf(add((onesyDate.dayWeek === 0 ? 0 : 7 - onesyDate.dayWeek), 'day', onesyDate), 'day'));
      case 'month':
        return new OnesyDate(new Date(onesyDate.value.setMonth(onesyDate.month, 0)).setHours(23, 59, 59, 999));
      case 'year':
        return new OnesyDate(new Date(onesyDate.value.setMonth(12, 0)).setHours(23, 59, 59, 999));
      default:
        break;
    }
  }
}
