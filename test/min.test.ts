/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, format, min } from '../src';

group('@onesy/date/min', () => {

  to('min', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.min([
      new window.OnesyDate.OnesyDate('2014-04-14T14:04:14'),
      new window.OnesyDate.OnesyDate('2014-04-17T14:04:14'),
      new window.OnesyDate.OnesyDate('2014-04-14T14:40:14'),
      new window.OnesyDate.OnesyDate('2014-04-14T14:41:14'),
    ])));
    const valueNode = format(min([
      new OnesyDate('2014-04-14T14:04:14'),
      new OnesyDate('2014-04-17T14:04:14'),
      new OnesyDate('2014-04-14T14:40:14'),
      new OnesyDate('2014-04-14T14:41:14'),
    ]));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.min([
      '🙂' as any,
    ]));
    const valueNode = min([
      '🙂' as any,
    ]);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
