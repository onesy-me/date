import AmauiDate, { units } from './amaui-date';

export default function ago(amauiDate: AmauiDate = AmauiDate.amauiDate, withSufix: boolean = true): string {
  const now = new AmauiDate();

  if (
    amauiDate.valid &&
    amauiDate.milliseconds < now.milliseconds
  ) {
    let value = '';

    const ago_ = {
      milliseconds: now.milliseconds - amauiDate.milliseconds,
    };

    ago_['second'] = Math.floor(ago_['milliseconds'] / 1e3);
    ago_['minute'] = Math.floor(ago_['second'] / 6e1);
    ago_['hour'] = Math.floor(ago_['minute'] / 6e1);
    ago_['day'] = Math.floor(ago_['hour'] / 24);
    ago_['month'] = Math.floor(ago_['day'] / 30);
    ago_['year'] = Math.floor(ago_['month'] / 12);

    units.forEach(unit => {
      if (ago_[unit] > 0) value = ago_[unit] === 1 ? `a${unit === 'hour' ? 'n' : ''} ${unit}` : `${ago_[unit]} ${unit}s`;

      if (unit === 'second' && ago_[unit] < 14) value = `a few seconds`;
    });

    return `${value}${withSufix ? ' ago' : ''}`;
  }
}
