import getLeadingZerosNumber from '@amaui/utils/getLeadingZerosNumber';
import AmauiDate from './AmauiDate';

export default function getTimezoneOffset(value: AmauiDate = new AmauiDate(), divider = ':') {
  if (
    value &&
    value.valid
  ) {
    const timezoneOffset = value.value.getTimezoneOffset();

    const sign = timezoneOffset < 0 ? '+' : '-';

    const difference = Math.abs(timezoneOffset) / 60;

    const items = String(difference).split('.').filter(Boolean);

    const hours = getLeadingZerosNumber(parseInt(items[0], 10));
    const minutes = items[1] && (parseInt(items[1], 10) * 10);

    return `${sign}${hours}${divider}${minutes ? minutes : '00'}`;
  }
}
