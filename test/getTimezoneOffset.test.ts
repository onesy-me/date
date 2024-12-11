/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, getTimezoneOffset } from '../src';

group('@onesy/date/getTimezoneOffset', () => {

  to('getTimezoneOffset', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.getTimezoneOffset());
    const valueNode = getTimezoneOffset();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(Number(value.replace(':', '.')) * -60).eq(new Date().getTimezoneOffset()));
  });

  to('delimiter', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.getTimezoneOffset(undefined, '.'));
    const valueNode = getTimezoneOffset(undefined, '.');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(Number(value) * -60).eq(new Date().getTimezoneOffset()));
  });

  to('Daylight Saving Time', async () => {
    const valueBrowsers = await evaluate((window: any) => [
      window.OnesyDate.getTimezoneOffset(new window.OnesyDate.OnesyDate('January 1, 2021')),
      window.OnesyDate.getTimezoneOffset(new window.OnesyDate.OnesyDate('May 1, 2021')),
    ]);
    const valueNode = [
      getTimezoneOffset(new OnesyDate('January 1')),
      getTimezoneOffset(new OnesyDate('May 1')),
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => {
      assert(Number(value[0].replace(':', '.')) * -60).eq(new Date('January 1').getTimezoneOffset());
      assert(Number(value[1].replace(':', '.')) * -60).eq(new Date('May 1').getTimezoneOffset());
    });
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.getTimezoneOffset('🙂' as any));
    const valueNode = getTimezoneOffset('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
