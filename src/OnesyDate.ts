import merge from '@onesy/utils/merge';

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

// l('millisecond') | l('milliseconds') | l('second') | l('minute') | l('minutes') | l('hour') | l('hours') | l('day') | l('days') | l('week') | l('weeks') | l('month') | l('months') | l('year')
export type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'minutes' | 'hour' | 'hours' | 'day' | 'days' | 'dayWeek' | 'dayYear' | 'week' | 'weeks' | 'month' | 'months' | 'year';

// l('before') | l('after') | l('same') | l('between') | l('before or same') | l('after or same') | l('leap-year') | l('leap-month')
export type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';

// l('millisecond') l('milliseconds') l('second') l('minute') l('minutes') l('hour') l('hours') l('day') l('days') l('week') l('weeks') l('month') l('months') l('year')
export const units = ['millisecond', 'milliseconds', 'second', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'dayWeek', 'dayYear', 'week', 'weeks', 'month', 'months', 'year'];

// l('January') l('February') l('March') l('April') l('May') l('June') l('July') l('August') l('September') l('October') l('November') l('December')
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// l('Jan') l('Feb') l('Mar') l('Apr') l('May') l('Jun') l('Jul') l('Aug') l('Sep') l('Oct') l('Nov') l('Dec')
export const monthsAbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// l('Monday') l('Tuesday') l('Wednesday') l('Thursday') l('Friday') l('Saturday') l('Sunday')
export const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// l('Mon') l('Tue') l('Wed') l('Thu') l('Fri') l('Sat') l('Sun')
export const daysWeekAbr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default class OnesyDate {
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

  public static get utc(): OnesyDate {
    return new OnesyDate(new Date(), { utc: true });
  }

  public static get daysInMonth(): number { return new OnesyDate().daysInMonth; }

  public static get valueOf(): number { return new OnesyDate().valueOf; }

  public static get unix(): number { return new OnesyDate().unix; }

  public static get milliseconds(): number { return new OnesyDate().milliseconds; }

  public static get iso(): string { return new OnesyDate().iso; }

  public static get onesyDate(): OnesyDate { return new OnesyDate(); }

  public static get local(): OnesyDate { return new OnesyDate().local; }

  constructor(
    public value_: string | number | OnesyDate | Date = new Date(),
    public options: IOptions = {}
  ) {
    this.init();
  }

  private init() {
    // Merge options with option defaults
    this.options = merge(this.options, optionsDefault);

    // Make a date object from it
    this.value = new Date(((this.value_ as OnesyDate).valid ? (this.value_ as OnesyDate).value : this.value_) as any);

    if (this.valid) {
      this.millisecond = this.value[this.options.utc ? 'getUTCMilliseconds' : 'getMilliseconds']();
      this.milliseconds = this.value.getTime();
      this.second = this.value[this.options.utc ? 'getUTCSeconds' : 'getSeconds']();
      this.minute = this.value[this.options.utc ? 'getUTCMinutes' : 'getMinutes']();
      this.minutes = Math.ceil(this.milliseconds / (1e3 * 60));
      this.hour = this.value[this.options.utc ? 'getUTCHours' : 'getHours']();
      this.hours = Math.ceil(this.milliseconds / (1e3 * 60 * 60));
      this.day = this.value[this.options.utc ? 'getUTCDate' : 'getDate']();
      this.days = Math.ceil(this.milliseconds / (1e3 * 60 * 60 * 24));
      this.dayWeek = this.value[this.options.utc ? 'getUTCDay' : 'getDay']();
      // https://stackoverflow.com/a/64293860 ty
      this.weeks = Math.ceil(((this.milliseconds / 1000) + 345600) / 604800);
      this.month = this.value[this.options.utc ? 'getUTCMonth' : 'getMonth']() + 1;
      this.year = this.value[this.options.utc ? 'getUTCFullYear' : 'getFullYear']();
      this.dayYear = Math.ceil((this.milliseconds - Number(new Date(this.year, 0, 0))) / 1000 / 60 / 60 / 24);
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
    return (this.value_ === undefined || this.value_ instanceof Date || this.value_ instanceof OnesyDate || typeof this.value_ === 'number') && !Number.isNaN(Math.ceil(this.value?.getTime() / 1000));
  }

  public get local(): OnesyDate {
    if (this.valid) return new OnesyDate(new Date(this.value.toLocaleString('en-us')));
  }

  public get utc(): OnesyDate {
    return new OnesyDate(this.value, { utc: true });
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

  public timezone(value: string): OnesyDate {
    if (this.valid && value) return new OnesyDate(this.value.toLocaleString('en-us', { timeZone: value }));
  }
}
