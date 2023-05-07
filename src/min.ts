import AmauiDate from './AmauiDate';

export default function min(values: Array<AmauiDate> = []): AmauiDate {
  if (values.every(value => value.valid)) return values.sort((a, b) => a.milliseconds - b.milliseconds)[0];
}
