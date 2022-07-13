import AmauiDate, { TTimeUnits } from './amaui-date';
import add from './add';

export default function remove(value: number, unit: TTimeUnits, amauidate: AmauiDate = AmauiDate.amauidate): AmauiDate {
  if (
    amauidate &&
    amauidate.valid
  ) return add(value * -1, unit, amauidate);
}
