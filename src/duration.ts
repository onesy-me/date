import is from '@amaui/utils/is';
import clamp from '@amaui/utils/clamp';

export default function duration(
  value: number,
  unitAbbr = false,
  raw = false,
  separator = ' ',
  display = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']
) {
  if (is('number', value)) {
    let result = '';
    let milliseconds = value;
    const values = [];
    const valuesRaw = {};

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

          valuesRaw[unit] = value_;

          values.push(`${value_}${separator}${unitAbbr ? unitsAbbr[unit] : unit}${(value_ > 1 && !unitAbbr) ? 's' : ''}`);
        }
      }
    }

    values.forEach((value_: string) => result += ` ${value_}`);

    return raw ? valuesRaw : result.trim();
  }
}
