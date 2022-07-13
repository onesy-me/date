import getLeadingZerosNumber from '@amaui/utils/getLeadingZerosNumber';
import getOrdinalNumber from '@amaui/utils/getOrdinalNumber';

import AmauiDate from './amaui-date';
import getTimezoneOffset from './getTimezoneOffset';
import myTimezoneAbbr from './myTimezoneAbbr';

export default function formats(amauidate: AmauiDate = AmauiDate.amauidate): Array<{ abr: string; value: string }> {
  const timezoneAbbr = myTimezoneAbbr();

  return [
    // Milliseconds
    { abr: 'SSSS', value: getLeadingZerosNumber(amauidate.millisecond, { leadingZeros: 3 }).slice(0, 4) },
    { abr: 'SSS', value: getLeadingZerosNumber(amauidate.millisecond, { leadingZeros: 2 }).slice(0, 3) },
    { abr: 'SS', value: getLeadingZerosNumber(amauidate.millisecond, { leadingZeros: 1 }).slice(0, 2) },
    { abr: 'S', value: getLeadingZerosNumber(amauidate.millisecond, { leadingZeros: 0 }).slice(0, 1) },

    // Seconds
    { abr: 'ss', value: getLeadingZerosNumber(amauidate.second) },
    { abr: 's', value: String(amauidate.second) },

    // Minutes
    { abr: 'mm', value: getLeadingZerosNumber(amauidate.minute) },
    { abr: 'm', value: String(amauidate.minute) },

    // Hours
    { abr: 'HH', value: getLeadingZerosNumber(amauidate.hour) },
    { abr: 'H', value: String(amauidate.hour) },
    { abr: 'hh', value: getLeadingZerosNumber(amauidate.hour > 12 ? amauidate.hour - 12 : amauidate.hour) },
    { abr: 'h', value: String(amauidate.hour > 12 ? amauidate.hour - 12 : amauidate.hour) },

    // Day
    { abr: 'Do', value: getOrdinalNumber(amauidate.day) },

    { abr: 'DD', value: getLeadingZerosNumber(amauidate.day) },
    { abr: 'D', value: String(amauidate.day) },
    { abr: 'dd', value: amauidate.daysWeek[amauidate.dayWeek - 1] },
    { abr: 'd', value: amauidate.daysWeekAbr[amauidate.dayWeek - 1] },

    // Month
    { abr: 'Mo', value: getOrdinalNumber(amauidate.month) },

    { abr: 'MMMM', value: amauidate.months[amauidate.month - 1] },
    { abr: 'MMM', value: amauidate.monthsAbr[amauidate.month - 1] },
    { abr: 'MM', value: getLeadingZerosNumber(amauidate.month) },
    { abr: 'M', value: String(amauidate.month) },

    // Year
    { abr: 'YYYY', value: String(amauidate.year) },

    // AM / PM
    { abr: 'A', value: amauidate.hour < 12 ? 'AM' : 'PM' },
    { abr: 'a', value: amauidate.hour < 12 ? 'am' : 'pm' },

    // Timezone offset
    { abr: 'ZZ', value: getTimezoneOffset(amauidate, '') },
    { abr: 'Z', value: getTimezoneOffset(amauidate) },

    // Timezone abr
    { abr: 'z', value: timezoneAbbr },

    // Unix
    { abr: 'X', value: String(amauidate.unix) },
    { abr: 'x', value: String(amauidate.value.getTime()) },
  ];
}
