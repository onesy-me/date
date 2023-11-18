import merge from '@amaui/utils/merge';

interface IOptionsOverrides {
  months?: string[];
  monthsAbr?: string[];
  daysWeek?: string[];
  daysWeekAbr?: string[];
}

interface IOptions {
  utc?: boolean;
  overrides?: IOptionsOverrides;
}

const optionsDefault: IOptions = {};

export type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'minutes' | 'hour' | 'hours' | 'day' | 'days' | 'dayWeek' | 'dayYear' | 'week' | 'weeks' | 'month' | 'months' | 'year';

export type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';

export const units = ['millisecond', 'milliseconds', 'second', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'dayWeek', 'dayYear', 'week', 'weeks', 'month', 'months', 'year'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthsAbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const daysWeekAbr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default class AmauiDate {
  public value: Date;
  public millisecond: number;
  public milliseconds: number;
  public second: number;
  public minute: number;
  public minutes: number;
  public hour: number;
  public hours: number;
  public day: number;
  public days: number;
  public dayWeek: number;
  public dayYear: number;
  public week: number;
  public weeks: number;
  public month: number;
  public months: number;
  public year: number;

  public static get utc(): AmauiDate {
    return new AmauiDate(new Date(), { utc: true });
  }

  public static get daysInMonth(): number { return new AmauiDate().daysInMonth; }

  public static get valueOf(): number { return new AmauiDate().valueOf; }

  public static get unix(): number { return new AmauiDate().unix; }

  public static get milliseconds(): number { return new AmauiDate().milliseconds; }

  public static get iso(): string { return new AmauiDate().iso; }

  public static get amauiDate(): AmauiDate { return new AmauiDate(); }

  public static get local(): AmauiDate { return new AmauiDate().local; }

  constructor(
    public value_: string | number | AmauiDate | Date = new Date(),
    public options: IOptions = {}
  ) {
    this.init();
  }

  private init() {
    // Merge options with option defaults
    this.options = merge(this.options, optionsDefault);

    // Make a date object from it
    this.value = new Date(((this.value_ as AmauiDate).valid ? (this.value_ as AmauiDate).value : this.value_) as any);

    if (this.valid) {
      this.millisecond = this.value[this.options.utc ? 'getUTCMilliseconds' : 'getMilliseconds']();
      this.milliseconds = this.value.getTime();
      this.second = this.value[this.options.utc ? 'getUTCSeconds' : 'getSeconds']();
      this.minute = this.value[this.options.utc ? 'getUTCMinutes' : 'getMinutes']();
      this.minutes = Math.floor(this.milliseconds / (1e3 * 60));
      this.hour = this.value[this.options.utc ? 'getUTCHours' : 'getHours']();
      this.hours = Math.floor(this.milliseconds / (1e3 * 60 * 60));
      this.day = this.value[this.options.utc ? 'getUTCDate' : 'getDate']();
      this.days = Math.floor(this.milliseconds / (1e3 * 60 * 60 * 24));
      this.dayWeek = this.value[this.options.utc ? 'getUTCDay' : 'getDay']();
      // https://stackoverflow.com/a/64293860 ty
      this.weeks = Math.floor(((this.milliseconds / 1000) + 345600) / 604800);
      this.month = this.value[this.options.utc ? 'getUTCMonth' : 'getMonth']() + 1;
      this.year = this.value[this.options.utc ? 'getUTCFullYear' : 'getFullYear']();
      this.dayYear = Math.floor((this.milliseconds - Number(new Date(this.year, 0, 0))) / 1000 / 60 / 60 / 24);
      this.months = ((this.year - 1970) * 12) - (12 - this.month);

      this.weekValue();
    }
  }

  private weekValue(): number {
    const WEEK_MILLISECONDS = 604800000;
    const firstDayOfWeek = 1;
    const startOfYear = new Date(this.year, 0, 1);

    startOfYear.setDate(startOfYear.getDate() + (firstDayOfWeek - (startOfYear.getDay() % 7)));

    this.week = Math.round((Number(this.value) - Number(startOfYear)) / WEEK_MILLISECONDS) + 1;

    return this.week;
  }

  public get monthsNames(): string[] {
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
    return (this.value_ === undefined || this.value_ instanceof Date || this.value_ instanceof AmauiDate || typeof this.value_ === 'number') && !Number.isNaN(Math.floor(this.value?.getTime() / 1000));
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
