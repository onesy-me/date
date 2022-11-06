import AmauiDate, { units } from './amaui-date';

type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';

type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';

export default function is(value: AmauiDate = AmauiDate.amauiDate, query: TIsQuery, value1: AmauiDate = AmauiDate.amauiDate, unit: TTimeUnits = 'milliseconds', value2: AmauiDate = AmauiDate.amauiDate): boolean {
  if (
    value &&
    value.valid
  ) {
    if (
      value1 &&
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
            value2.valid
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
