import AmauiDate from './amaui-date';
import myTimezone from './myTimezone';
import myTimezoneAbbr from './myTimezoneAbbr';
import { ITimezone } from './timezones';

interface IMy {
  amauidate: AmauiDate;
  timezone: ITimezone;
}

export default function my(): IMy {
  const timezone = myTimezone();

  timezone.abbr = myTimezoneAbbr();

  const amauidate = new AmauiDate();

  return {
    amauidate,
    timezone,
  };
}
