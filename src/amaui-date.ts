import { is as is_, isExists, merge, copy, clamp, getStringVariables, setStringVariables, getLeadingZerosNumber, getOrdinalNumber } from '@amaui/utils';
import { timezones, ITimezone } from './timezones';

interface IOptions {
  utc?: boolean;
  overrides?: {
    months?: string[];
    monthsAbr?: string[];
    daysWeek?: string[];
    daysWeekAbr?: string[];
  };
}

const optionsDefault: IOptions = {};

type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';

type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';

interface IMy {
  amauidate: AmauiDate;
  timezone: ITimezone;
}

export const units = ['millisecond', 'milliseconds', 'second', 'minute', 'hour', 'day', 'month', 'year'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthsAbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const daysWeekAbr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getTimezoneOffset = (value: AmauiDate = new AmauiDate(), divider = ':') => {
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
};

export function duration(
  value: number,
  unitAbbr = false,
  separator = ' ',
  display = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']
) {
  if (is_('number', value)) {
    let result = '';
    let milliseconds = value;
    const values = [];

    const millisecondsInA = {
      millisecond: 1,
      second: 1e3,
      minute: 60 * 1e3,
      hour: 60 * 60 * 1e3,
      day: 24 * 60 * 60 * 1e3,
      month: 30 * 24 * 60 * 60 * 1e3,
      year: 12 * 30 * 24 * 60 * 60 * 1e3,
    };

    const unitsAbbr = {
      millisecond: 'ms',
      second: 's',
      minute: 'm',
      hour: 'h',
      day: 'd',
      month: 'mo',
      year: 'y',
    };

    for (const unit of display) {
      if (millisecondsInA[unit]) {
        const value_ = clamp(Math.floor(milliseconds / millisecondsInA[unit]), 0);

        if (value_ > 0) {
          milliseconds -= value_ * millisecondsInA[unit];

          values.push(`${value_}${separator}${unitAbbr ? unitsAbbr[unit] : unit}${(value_ > 1 && !unitAbbr) ? 's' : ''}`);
        }
      }
    }

    values.forEach((value_: string) => result += ` ${value_}`);

    return result.trim();
  }
}

export function myTimezone(): ITimezone {
  let code: string;
  let timezoneOffset: string;

  if (isExists('Intl')) code = Intl.DateTimeFormat().resolvedOptions().timeZone;
  else timezoneOffset = getTimezoneOffset();

  const timezone = copy(timezones.find(item => code ? item.code === code : item.utc === timezoneOffset));

  return timezone;
}

export function myTimezoneAbbr(): string {
  let timezoneAbr = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' });

  if (timezoneAbr) timezoneAbr = timezoneAbr.split(' ')[2];

  return timezoneAbr;
}

export function my(): IMy {
  const timezone = myTimezone();

  timezone.abbr = myTimezoneAbbr();

  const amauidate = new AmauiDate();

  return {
    amauidate,
    timezone,
  };
}

export function formats(amauidate: AmauiDate = AmauiDate.amauidate): Array<{ abr: string; value: string }> {
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

// ISO as a default format value string
export function format(amauidate: AmauiDate = AmauiDate.amauidate, value_: string = `YYYY-MM-DDTHH:mm:ss`): string {
  if (
    amauidate &&
    amauidate.valid
  ) {
    let value = value_;

    const formatValues = formats(amauidate);
    const abrs = formatValues.map(item => item.abr);

    // Extract and save all words quoted with: '', "", ``, {} or [],
    // in a string, so adding abr values doesn't override 'em
    const words = getStringVariables(value, {
      variablesRegExp: /('.*?'|".*?"|`.*?`|\{.*?\}|\[.*?\])/g,
    });

    // Add placeholders before adding all abr values
    value = words.valueWithPlaceholders;

    // Replace all abr values
    // tslint:disable-next-line
    const reAbr = abrs.reduce((result, current, index) => result += `${current}${index !== abrs.length - 1 ? '|' : ''}`, '');

    const abrVariables = getStringVariables(value, {
      variablesRegExp: new RegExp(reAbr, 'g'),
      cleanVariables: false,
      placeholderPrefix: '__',
    });

    // Add placeholders for matches prior to adding all abr values
    value = abrVariables.valueWithPlaceholders;

    const abrVariablesToValue = [];

    abrVariables.variables.forEach(variable => {
      const format_ = formatValues.find(item => item.abr === variable);

      abrVariablesToValue.push({ key: variable, value: format_.value });
    });

    // Replace abr variables with appropriate values
    value = setStringVariables(value, abrVariablesToValue, {
      getVariables: false,
      placeholderPrefix: '__',
    });

    // Revert back all the saved words
    const wordsVariablesToValue = [];

    words.variables.forEach(variable => wordsVariablesToValue.push({ key: variable, value: variable }));

    value = setStringVariables(value, wordsVariablesToValue, { getVariables: false });

    return value;
  }
}

export function startOf(amauidate: AmauiDate = AmauiDate.amauidate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'second':
        return new AmauiDate(amauidate.value.setMilliseconds(0));
      case 'minute':
        return new AmauiDate(amauidate.value.setSeconds(0, 0));
      case 'hour':
        return new AmauiDate(amauidate.value.setMinutes(0, 0, 0));
      case 'day':
        return new AmauiDate(amauidate.value.setHours(0, 0, 0, 0));
      case 'month':
        return new AmauiDate(new Date(amauidate.value.setDate(1)).setHours(0, 0, 0, 0));
      case 'year':
        return new AmauiDate(new Date(amauidate.value.setMonth(0, 1)).setHours(0, 0, 0, 0));
      default:
        break;
    }
  }
}

export function endOf(amauidate: AmauiDate = AmauiDate.amauidate, unit: TTimeUnits = 'day'): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'second':
        return new AmauiDate(amauidate.value.setMilliseconds(999));
      case 'minute':
        return new AmauiDate(amauidate.value.setSeconds(59, 999));
      case 'hour':
        return new AmauiDate(amauidate.value.setMinutes(59, 59, 999));
      case 'day':
        return new AmauiDate(amauidate.value.setHours(23, 59, 59, 999));
      case 'month':
        return new AmauiDate(new Date(amauidate.value.setMonth(amauidate.month, 0)).setHours(23, 59, 59, 999));
      case 'year':
        return new AmauiDate(new Date(amauidate.value.setMonth(12, 0)).setHours(23, 59, 59, 999));
      default:
        break;
    }
  }
}

export function add(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauidate.value.setMilliseconds(amauidate.millisecond + value));
      case 'second':
        return new AmauiDate(amauidate.value.setSeconds(amauidate.second + value));
      case 'minute':
        return new AmauiDate(amauidate.value.setMinutes(amauidate.minute + value));
      case 'hour':
        return new AmauiDate(amauidate.value.setHours(amauidate.hour + value));
      case 'day':
        return new AmauiDate(amauidate.value.setDate(amauidate.day + value));
      case 'week':
        return new AmauiDate(amauidate.value.setDate(amauidate.day + (value * 7)));
      case 'month':
        return new AmauiDate(amauidate.value.setMonth(amauidate.month - 1 + value));
      case 'year':
        return new AmauiDate(amauidate.value.setFullYear(amauidate.year + value));
      default:
        break;
    }
  }
}

export function remove(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) return add(value * -1, unit, amauidate);
}

export function min(values: Array<AmauiDate> = []): AmauiDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => a.milliseconds - b.milliseconds)[0];
}

export function max(values: Array<AmauiDate> = []): AmauiDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => b.milliseconds - a.milliseconds)[0];
}

export function set(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) {
    switch (unit) {
      case 'millisecond':
        return new AmauiDate(amauidate.value.setMilliseconds(value));
      case 'milliseconds':
        return new AmauiDate(value);
      case 'second':
        return new AmauiDate(amauidate.value.setSeconds(value));
      case 'minute':
        return new AmauiDate(amauidate.value.setMinutes(value));
      case 'hour':
        return new AmauiDate(amauidate.value.setHours(value));
      case 'day':
        return new AmauiDate(amauidate.value.setDate(clamp(value, 0, 31)));
      case 'dayWeek':
        return add(clamp(value, 0, 6) - amauidate.dayWeek, 'day', amauidate);
      case 'dayYear':
        return add(clamp(value, 0, 366) - amauidate.dayYear, 'day', amauidate);
      case 'week':
        return add(value - amauidate.week, 'week', amauidate);
      case 'month':
        return new AmauiDate(amauidate.value.setMonth(value));
      case 'year':
        return new AmauiDate(amauidate.value.setFullYear(value));
      default:
        break;
    }
  }
}

export function ago(amauidate: AmauiDate = AmauiDate.amauidate, withSufix: boolean = true): string {
  const now = new AmauiDate();

  if (
    amauidate.valid &&
    amauidate.milliseconds < now.milliseconds
  ) {
    let value = '';

    const ago_ = {
      milliseconds: now.milliseconds - amauidate.milliseconds,
    };

    ago_['second'] = Math.floor(ago_['milliseconds'] / 1e3);
    ago_['minute'] = Math.floor(ago_['second'] / 6e1);
    ago_['hour'] = Math.floor(ago_['minute'] / 6e1);
    ago_['day'] = Math.floor(ago_['hour'] / 24);
    ago_['month'] = Math.floor(ago_['day'] / 30);
    ago_['year'] = Math.floor(ago_['month'] / 12);

    units.forEach(unit => {
      if (ago_[unit] > 0) value = ago_[unit] === 1 ? `a${unit === 'hour' ? 'n' : ''} ${unit}` : `${ago_[unit]} ${unit}s`;

      if (unit === 'second' && ago_[unit] < 14) value = `a few seconds`;
    });

    return `${value}${withSufix ? ' ago' : ''}`;
  }
}

export function In(to: AmauiDate = AmauiDate.amauidate, withPrefix: boolean = true, from: AmauiDate = AmauiDate.amauidate): string {
  if (
    to.valid &&
    from.valid &&
    to.milliseconds > from.milliseconds
  ) {
    let value = '';

    const ins = {
      milliseconds: to.milliseconds - from.milliseconds,
    };

    ins['second'] = Math.floor(ins['milliseconds'] / 1e3);
    ins['minute'] = Math.floor(ins['second'] / 6e1);
    ins['hour'] = Math.floor(ins['minute'] / 6e1);
    ins['day'] = Math.floor(ins['hour'] / 24);
    ins['month'] = Math.floor(ins['day'] / 30);
    ins['year'] = Math.floor(ins['month'] / 12);

    units.forEach(unit => {
      if (ins[unit] > 0) value = ins[unit] === 1 ? `a${unit === 'hour' ? 'n' : ''} ${unit}` : `${ins[unit]} ${unit}s`;

      if (unit === 'second' && ins[unit] < 14) value = `a few seconds`;
      else if (unit === 'millisecond' && ins[unit] < 14) value = `a few seconds`;
    });

    return `${withPrefix ? 'in ' : ''}${value}`;
  }
}

export function diff(value: AmauiDate, value1: AmauiDate, unit: TTimeUnits = 'millisecond'): number {
  if (
    value &&
    value.valid &&
    value instanceof AmauiDate &&

    value1 &&
    value1 instanceof AmauiDate &&
    value1.valid
  ) {
    const diffs = {};

    units.forEach(unit_ => diffs[unit_] = Math.floor(value[unit_] - value1[unit_]));

    return Math.abs(diffs[unit]);
  }
}

export function is(value: AmauiDate = AmauiDate.amauidate, query: TIsQuery, value1: AmauiDate = AmauiDate.amauidate, unit: TTimeUnits = 'millisecond', value2: AmauiDate = AmauiDate.amauidate): boolean {
  if (
    value &&
    value.valid &&
    value instanceof AmauiDate
  ) {
    if (
      value1 &&
      value1 instanceof AmauiDate &&
      value1.valid
    ) {
      const diffs = {};

      units.forEach(unit_ => diffs[unit_] = Math.floor(value[unit_] - value1[unit_]));

      const queryValue = diffs[unit];

      switch (query) {
        case 'before':
          return queryValue < 0;

        case 'after':
          return queryValue > 0;

        case 'same':
          return queryValue === 0;

        case 'between':
          if (
            value2 &&
            value2.valid &&
            value2 instanceof AmauiDate
          ) {
            return (
              (is(value2, 'after or same', value) && is(value2, 'before or same', value1)) ||
              is(value2, 'after or same', value1) && is(value2, 'before or same', value)
            );
          }

          return false;

        case 'before or same':
          return queryValue <= 0;

        case 'after or same':
          return queryValue >= 0;

        default:
          break;
      }
    }

    switch (query) {
      case 'leap-year':
        return ((value.year % 4 === 0) && (value.year % 100 !== 0)) || (value.year % 400 === 0);

      case 'leap-month':
        return value.month === 2 && value.daysInMonth === 29;

      default:
        return false;
    }
  }
}

const isValidTimestamp = (value: any) => (
  Number.isInteger(value) &&
  String(value).length >= 10 &&
  (
    new Date(value).getTime() > 0 ||
    new Date(value * 1000).getTime() > 0
  )
);

export class AmauiDate {
  public value: Date;
  public millisecond: number;
  public milliseconds: number;
  public second: number;
  public minute: number;
  public hour: number;
  public day: number;
  public dayWeek: number;
  public dayYear: number;
  public week: number;
  public month: number;
  public year: number;

  public static get utc(): AmauiDate {
    return new AmauiDate(new Date(), { utc: true });
  }

  public static get daysInMonth(): number { return new AmauiDate().daysInMonth; }

  public static get valueOf(): number { return new AmauiDate().valueOf; }

  public static get unix(): number { return new AmauiDate().unix; }

  public static get milliseconds(): number { return new AmauiDate().milliseconds; }

  public static get iso(): string { return new AmauiDate().iso; }

  public static get amauidate(): AmauiDate { return new AmauiDate(); }

  public static get local(): AmauiDate { return new AmauiDate().local; }

  constructor(
    public value_: string | number | AmauiDate | Date = new Date(),
    public options: IOptions = optionsDefault
  ) {
    this.init();
  }

  private init() {
    // Merge options with option defaults
    this.options = merge(this.options, optionsDefault);

    // Convert seconds to milliseconds
    // so it's valid in new Date as argument
    if (is_('number', this.value_) && String(this.value_).length === 10) (this.value_ as number) *= 1e3;

    // Make a date object from it
    this.value = new Date(this.value_ instanceof AmauiDate ? this.value_.value : this.value_);

    if (this.valid) {
      this.millisecond = this.value[this.options.utc ? 'getUTCMilliseconds' : 'getMilliseconds']();
      this.milliseconds = this.value.getTime();
      this.second = this.value[this.options.utc ? 'getUTCSeconds' : 'getSeconds']();
      this.minute = this.value[this.options.utc ? 'getUTCMinutes' : 'getMinutes']();
      this.hour = this.value[this.options.utc ? 'getUTCHours' : 'getHours']();
      this.day = this.value[this.options.utc ? 'getUTCDate' : 'getDate']();
      this.dayWeek = this.value[this.options.utc ? 'getUTCDay' : 'getDay']();
      this.month = this.value[this.options.utc ? 'getUTCMonth' : 'getMonth']() + 1;
      this.year = this.value[this.options.utc ? 'getUTCFullYear' : 'getFullYear']();
      this.dayYear = Math.floor((this.milliseconds - Number(new Date(this.year, 0, 0))) / 1000 / 60 / 60 / 24);

      this.weekValue();
    }
  }

  public weekValue(): number {
    const WEEK_MILLISECONDS = 604800000;
    const firstDayOfWeek = 1;
    const startOfYear = new Date(this.year, 0, 1);
    startOfYear.setDate(startOfYear.getDate() + (firstDayOfWeek - (startOfYear.getDay() % 7)));

    this.week = Math.round((Number(this.value) - Number(startOfYear)) / WEEK_MILLISECONDS) + 1;

    return this.week;
  }

  public get months(): string[] {
    return this.options.overrides?.months || months;
  }

  public get monthsAbr(): string[] {
    return this.options.overrides?.monthsAbr || monthsAbr;
  }

  public get daysWeek(): string[] {
    return this.options.overrides?.daysWeek || daysWeek;
  }

  public get daysWeekAbr(): string[] {
    return this.options.overrides?.daysWeekAbr || daysWeekAbr;
  }

  public get valid(): boolean {
    return this.value_ === undefined || this.value_ instanceof Date || this.value_ instanceof AmauiDate || isValidTimestamp(new Date(this.value_).getTime());
  }

  public get local(): AmauiDate {
    if (this.valid) return new AmauiDate(new Date(this.value.toLocaleString('en-us')));
  }

  public get utc(): AmauiDate {
    return new AmauiDate(this.value, { utc: true });
  }

  public get iso(): string {
    if (this.valid) return this.value.toISOString();
  }

  public get daysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }

  public get weeksInYear(): number {
    const date = new Date(this.year, 0, 1);
    const isLeapYear = new Date(this.year, 1, 29).getMonth() === 1;

    return (date.getDay() === 4 || isLeapYear && date.getDay() === 3) ? 53 : 52;
  }

  public get valueOf(): number {
    return this.milliseconds;
  }

  public get unix(): number {
    if (this.valid) return Math.floor(this.value.getTime() / 1000);
  }

  public timezone(value: string): AmauiDate {
    if (this.valid && value) return new AmauiDate(this.value.toLocaleString('en-us', { timeZone: value }));
  }
}
