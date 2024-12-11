import OnesyDate from './OnesyDate';

export default function min(values: Array<OnesyDate> = []): OnesyDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => a.milliseconds - b.milliseconds)[0];
}
