/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, min } from '../src';

group('@amaui/date/min', () => {

  to('min', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.min([
      new window.AmauiDate.AmauiDate('2014-04-14T14:04:14'),
      new window.AmauiDate.AmauiDate('2014-04-17T14:04:14'),
      new window.AmauiDate.AmauiDate('2014-04-14T14:40:14'),
      new window.AmauiDate.AmauiDate('2014-04-14T14:41:14'),
    ])));
    const valueNode = format(min([
      new AmauiDate('2014-04-14T14:04:14'),
      new AmauiDate('2014-04-17T14:04:14'),
      new AmauiDate('2014-04-14T14:40:14'),
      new AmauiDate('2014-04-14T14:41:14'),
    ]));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.min([
      '🙂' as any,
    ]));
    const valueNode = min([
      '🙂' as any,
    ]);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
