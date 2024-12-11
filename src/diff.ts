import OnesyDate, { TTimeUnits, units } from './OnesyDate';

export default function diff(value: OnesyDate, value1: OnesyDate, unit: TTimeUnits = 'millisecond'): number {
  if (
    value &&
    value.valid &&

    value1 &&
    value1.valid
  ) {
    const diffs = {};

    units.forEach(unit_ => diffs[unit_] = Math.floor(value[unit_] - value1[unit_]));

    return Math.abs(diffs[unit]);
  }
}
