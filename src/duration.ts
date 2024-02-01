import is from '@amaui/utils/is';
import clamp from '@amaui/utils/clamp';

export default function duration(
  value: number,
  unitAbbr = false,
  raw = false,
  separator = ' ',
  display = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']
): string {
  if (is('number', value)) {
    let result = '';
    let milliseconds = value;
    const values = [];
    const valuesRaw = {};

    const millisecondsInTime = {
      millisecond: 1,
      second: 1e3,
      minute: 60 * 1e3,
      hour: 60 * 60 * 1e3,
      day: 24 * 60 * 60 * 1e3,
      month: 30 * 24 * 60 * 60 * 1e3,
      year: 12 * 30 * 24 * 60 * 60 * 1e3
    };

    const unitsAbbr = {
      millisecond: 'ms',
      second: 's',
      minute: 'm',
      hour: 'h',
      day: 'd',
      month: 'mo',
      year: 'y'
    };

    for (const unit of display) {
      if (millisecondsInTime[unit]) {
        const value_ = clamp(Math.floor(milliseconds / millisecondsInTime[unit]), 0);

        if (value_ > 0) {
          milliseconds -= value_ * millisecondsInTime[unit];

          valuesRaw[unit] = value_;

          let valueTime: any = value_;

          if (unitAbbr) valueTime = `${valueTime} ${unitsAbbr[unit]}`;
          else valueTime = `${valueTime} ${unit}${value_ > 1 ? 's' : ''}`;

          values.push(valueTime);
        }
      }
    }

    values.forEach((value_: string) => result += `${separator}${value_}`);

    return (raw ? valuesRaw : result.trim()) as string;
  }
}
