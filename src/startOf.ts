import OnesyDate, { TTimeUnits } from './OnesyDate';
import remove from './remove';

export default function startOf(onesyDate_: OnesyDate = OnesyDate.onesyDate, unit: TTimeUnits = 'day'): OnesyDate {
  if (
    onesyDate_ &&
    onesyDate_.valid
  ) {
    const onesyDate = new OnesyDate(onesyDate_);

    switch (unit) {
      case 'second':
        return new OnesyDate(onesyDate.value.setMilliseconds(0));
      case 'minute':
        return new OnesyDate(onesyDate.value.setSeconds(0, 0));
      case 'hour':
        return new OnesyDate(onesyDate.value.setMinutes(0, 0, 0));
      case 'day':
        return new OnesyDate(onesyDate.value.setHours(0, 0, 0, 0));
      case 'week':
        return new OnesyDate(startOf(remove((onesyDate.dayWeek === 0 ? 7 : onesyDate.dayWeek) - 1, 'day', onesyDate), 'day'));
      case 'month':
        return new OnesyDate(new Date(onesyDate.value.setDate(1)).setHours(0, 0, 0, 0));
      case 'year':
        return new OnesyDate(new Date(onesyDate.value.setMonth(0, 1)).setHours(0, 0, 0, 0));
      default:
        break;
    }
  }
}
