import OnesyDate from './OnesyDate';

export default function max(values: Array<OnesyDate> = []): OnesyDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => b.milliseconds - a.milliseconds)[0];
}
