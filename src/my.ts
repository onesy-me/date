import AmauiDate from './AmauiDate';
import myTimezone from './myTimezone';
import myTimezoneAbbr from './myTimezoneAbbr';
import { ITimezone } from './timezones';

interface IMy {
  amauiDate: AmauiDate;
  timezone: ITimezone;
}

export default function my(): IMy {
  const timezone = myTimezone();

  timezone.abbr = myTimezoneAbbr();

  const amauiDate = new AmauiDate();

  return {
    amauiDate,
    timezone,
  };
}
