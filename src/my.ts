import OnesyDate from './OnesyDate';
import myTimezone from './myTimezone';
import myTimezoneAbbr from './myTimezoneAbbr';
import { ITimezone } from './timezones';

interface IMy {
  onesyDate: OnesyDate;
  timezone: ITimezone;
}

export default function my(): IMy {
  const timezone = myTimezone();

  timezone.abbr = myTimezoneAbbr();

  const onesyDate = new OnesyDate();

  return {
    onesyDate,
    timezone,
  };
}
