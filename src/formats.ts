import getLeadingZerosNumber from '@amaui/utils/getLeadingZerosNumber';
import getOrdinalNumber from '@amaui/utils/getOrdinalNumber';

import AmauiDate from './AmauiDate';
import getTimezoneOffset from './getTimezoneOffset';
import myTimezoneAbbr from './myTimezoneAbbr';

export default function formats(amauiDate: AmauiDate = AmauiDate.amauiDate): Array<{ abr: string; value: string }> {
  const timezoneAbbr = myTimezoneAbbr();

  return [
    // Milliseconds
    { abr: 'SSSS', value: getLeadingZerosNumber(amauiDate.millisecond, { leadingZeros: 3 }).slice(0, 4) },
    { abr: 'SSS', value: getLeadingZerosNumber(amauiDate.millisecond, { leadingZeros: 2 }).slice(0, 3) },
    { abr: 'SS', value: getLeadingZerosNumber(amauiDate.millisecond, { leadingZeros: 1 }).slice(0, 2) },
    { abr: 'S', value: getLeadingZerosNumber(amauiDate.millisecond, { leadingZeros: 0 }).slice(0, 1) },

    // Seconds
    { abr: 'ss', value: getLeadingZerosNumber(amauiDate.second) },
    { abr: 's', value: String(amauiDate.second) },

    // Minutes
    { abr: 'mm', value: getLeadingZerosNumber(amauiDate.minute) },
    { abr: 'm', value: String(amauiDate.minute) },

    // Hours
    { abr: 'HH', value: getLeadingZerosNumber(amauiDate.hour) },
    { abr: 'H', value: String(amauiDate.hour) },
    { abr: 'hh', value: getLeadingZerosNumber(amauiDate.hour > 12 ? amauiDate.hour - 12 : amauiDate.hour) },
    { abr: 'h', value: String(amauiDate.hour > 12 ? amauiDate.hour - 12 : amauiDate.hour) },

    // Day
    { abr: 'Do', value: getOrdinalNumber(amauiDate.day) },

    { abr: 'DD', value: getLeadingZerosNumber(amauiDate.day) },
    { abr: 'D', value: String(amauiDate.day) },
    { abr: 'dd', value: amauiDate.daysWeek[amauiDate.dayWeek - 1 < 0 ? amauiDate.daysWeek.length - 1 : amauiDate.dayWeek - 1] },
    { abr: 'd', value: amauiDate.daysWeekAbr[amauiDate.dayWeek - 1 < 0 ? amauiDate.daysWeekAbr.length - 1 : amauiDate.dayWeek - 1] },

    // Month
    { abr: 'Mo', value: getOrdinalNumber(amauiDate.month) },

    { abr: 'MMMM', value: amauiDate.months[amauiDate.month - 1 < 0 ? amauiDate.months.length - 1 : amauiDate.month - 1] },
    { abr: 'MMM', value: amauiDate.monthsAbr[amauiDate.month - 1 < 0 ? amauiDate.monthsAbr.length - 1 : amauiDate.month - 1] },
    { abr: 'MM', value: getLeadingZerosNumber(amauiDate.month) },
    { abr: 'M', value: String(amauiDate.month) },

    // Year
    { abr: 'YYYY', value: String(amauiDate.year) },

    // AM / PM
    { abr: 'A', value: amauiDate.hour < 12 ? 'AM' : 'PM' },
    { abr: 'a', value: amauiDate.hour < 12 ? 'am' : 'pm' },

    // Timezone offset
    { abr: 'ZZ', value: getTimezoneOffset(amauiDate, '') },
    { abr: 'Z', value: getTimezoneOffset(amauiDate) },

    // Timezone abr
    { abr: 'z', value: timezoneAbbr },

    // Unix
    { abr: 'X', value: String(amauiDate.unix) },
    { abr: 'x', value: String(amauiDate.value.getTime()) },
  ];
}
