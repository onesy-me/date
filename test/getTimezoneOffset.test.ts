/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, getTimezoneOffset } from '../src';

group('@amaui/date/getTimezoneOffset', () => {

  to('getTimezoneOffset', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset(),);
    const valueNode = getTimezoneOffset();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(Number(value.replace(':', '.')) * -60).eq(new Date().getTimezoneOffset()));
  });

  to('delimiter', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset(undefined, '.'),);
    const valueNode = getTimezoneOffset(undefined, '.');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(Number(value) * -60).eq(new Date().getTimezoneOffset()));
  });

  to('Daylight Saving Time', async () => {
    const valueBrowsers = await evaluate((window: any) => [
      window.AmauiDate.getTimezoneOffset(new window.AmauiDate.AmauiDate('January 1, 2021')),
      window.AmauiDate.getTimezoneOffset(new window.AmauiDate.AmauiDate('May 1, 2021')),
    ]);
    const valueNode = [
      getTimezoneOffset(new AmauiDate('January 1')),
      getTimezoneOffset(new AmauiDate('May 1')),
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => {
      assert(Number(value[0].replace(':', '.')) * -60).eq(new Date('January 1').getTimezoneOffset());
      assert(Number(value[1].replace(':', '.')) * -60).eq(new Date('May 1').getTimezoneOffset());
    });
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset('🙂' as any),);
    const valueNode = getTimezoneOffset('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
