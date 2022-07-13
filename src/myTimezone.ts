import isExists from '@amaui/utils/isExists';
import copy from '@amaui/utils/copy';

import timezones, { ITimezone } from './timezones';
import getTimezoneOffset from './getTimezoneOffset';

export default function myTimezone(): ITimezone {
  let code: string;
  let timezoneOffset: string;

  if (isExists('Intl')) code = Intl.DateTimeFormat().resolvedOptions().timeZone;
  else timezoneOffset = getTimezoneOffset();

  const timezone = copy(timezones.find(item => code ? item.code === code : item.utc === timezoneOffset));

  return timezone;
}
