import AmauiDate from './AmauiDate';

export default function max(values: Array<AmauiDate> = []): AmauiDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => b.milliseconds - a.milliseconds)[0];
}
