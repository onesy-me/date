import OnesyDate, { TTimeUnits } from './OnesyDate';
import add from './add';

export default function remove(value: number, unit: TTimeUnits, onesyDate: OnesyDate = OnesyDate.onesyDate): OnesyDate {
  if (
    onesyDate &&
    onesyDate.valid
  ) return add(value * -1, unit, onesyDate);
}
