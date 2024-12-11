import OnesyDate, { units } from './OnesyDate';

export default function In(to: OnesyDate = OnesyDate.onesyDate, withPrefix: boolean = true, from: OnesyDate = OnesyDate.onesyDate): string {
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
