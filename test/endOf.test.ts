/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, endOf } from '../src';

group('@amaui/date/endOf', () => {

  to('second', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'second')),);
    const valueNode = format(endOf(am, 'second'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('minute', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'minute')),);
    const valueNode = format(endOf(am, 'minute'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:59'));
  });

  to('hour', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'hour')),);
    const valueNode = format(endOf(am, 'hour'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:59:59'));
  });

  to('day', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'day')),);
    const valueNode = format(endOf(am, 'day'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T23:59:59'));
  });

  to('month', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'month')),);
    const valueNode = format(endOf(am, 'month'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-30T23:59:59'));
  });

  to('year', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'year')),);
    const valueNode = format(endOf(am, 'year'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-12-31T23:59:59'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.endOf('🙂' as any),);
    const valueNode = endOf('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
