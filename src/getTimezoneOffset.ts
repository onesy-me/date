import getLeadingZerosNumber from '@onesy/utils/getLeadingZerosNumber';
import OnesyDate from './OnesyDate';

export default function getTimezoneOffset(value: OnesyDate = new OnesyDate(), divider = ':') {
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
