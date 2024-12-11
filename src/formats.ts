import getLeadingZerosNumber from '@onesy/utils/getLeadingZerosNumber';
import getOrdinalNumber from '@onesy/utils/getOrdinalNumber';

import OnesyDate from './OnesyDate';
import getTimezoneOffset from './getTimezoneOffset';
import myTimezoneAbbr from './myTimezoneAbbr';

export default function formats(onesyDate: OnesyDate = OnesyDate.onesyDate): Array<{ abr: string; value: string }> {
  const timezoneAbbr = myTimezoneAbbr();

  return [
    // Milliseconds
    { abr: 'SSSS', value: getLeadingZerosNumber(onesyDate.millisecond, { leadingZeros: 3 }).slice(0, 4) },
    { abr: 'SSS', value: getLeadingZerosNumber(onesyDate.millisecond, { leadingZeros: 2 }).slice(0, 3) },
    { abr: 'SS', value: getLeadingZerosNumber(onesyDate.millisecond, { leadingZeros: 1 }).slice(0, 2) },
    { abr: 'S', value: getLeadingZerosNumber(onesyDate.millisecond, { leadingZeros: 0 }).slice(0, 1) },

    // Seconds
    { abr: 'ss', value: getLeadingZerosNumber(onesyDate.second) },
    { abr: 's', value: String(onesyDate.second) },

    // Minutes
    { abr: 'mm', value: getLeadingZerosNumber(onesyDate.minute) },
    { abr: 'm', value: String(onesyDate.minute) },

    // Hours
    { abr: 'HH', value: getLeadingZerosNumber(onesyDate.hour) },
    { abr: 'H', value: String(onesyDate.hour) },
    { abr: 'hh', value: getLeadingZerosNumber(onesyDate.hour > 12 ? onesyDate.hour - 12 : onesyDate.hour) },
    { abr: 'h', value: String(onesyDate.hour > 12 ? onesyDate.hour - 12 : onesyDate.hour) },

    // Day
    { abr: 'Do', value: getOrdinalNumber(onesyDate.day) },

    { abr: 'DD', value: getLeadingZerosNumber(onesyDate.day) },
    { abr: 'D', value: String(onesyDate.day) },
    { abr: 'dd', value: onesyDate.daysWeek[onesyDate.dayWeek - 1 < 0 ? onesyDate.daysWeek.length - 1 : onesyDate.dayWeek - 1] },
    { abr: 'd', value: onesyDate.daysWeekAbr[onesyDate.dayWeek - 1 < 0 ? onesyDate.daysWeekAbr.length - 1 : onesyDate.dayWeek - 1] },

    // Month
    { abr: 'Mo', value: getOrdinalNumber(onesyDate.month) },

    { abr: 'MMMM', value: onesyDate.monthsNames[onesyDate.month - 1 < 0 ? onesyDate.monthsNames.length - 1 : onesyDate.month - 1] },
    { abr: 'MMM', value: onesyDate.monthsAbr[onesyDate.month - 1 < 0 ? onesyDate.monthsAbr.length - 1 : onesyDate.month - 1] },
    { abr: 'MM', value: getLeadingZerosNumber(onesyDate.month) },
    { abr: 'M', value: String(onesyDate.month) },

    // Year
    { abr: 'YYYY', value: String(onesyDate.year) },

    // AM / PM
    { abr: 'A', value: onesyDate.hour < 12 ? 'AM' : 'PM' },
    { abr: 'a', value: onesyDate.hour < 12 ? 'am' : 'pm' },

    // Timezone offset
    { abr: 'ZZ', value: getTimezoneOffset(onesyDate, '') },
    { abr: 'Z', value: getTimezoneOffset(onesyDate) },

    // Timezone abr
    { abr: 'z', value: timezoneAbbr },

    // Unix
    { abr: 'X', value: String(onesyDate.unix) },
    { abr: 'x', value: String(onesyDate.value.getTime()) },
  ];
}
