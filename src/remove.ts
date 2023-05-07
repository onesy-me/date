import AmauiDate, { TTimeUnits } from './AmauiDate';
import add from './add';

export default function remove(value: number, unit: TTimeUnits, amauiDate: AmauiDate = AmauiDate.amauiDate): AmauiDate {
  if (
    amauiDate &&
    amauiDate.valid
  ) return add(value * -1, unit, amauiDate);
}
