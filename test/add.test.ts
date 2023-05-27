/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, add } from '../src';

group('@amaui/date/add', () => {

  to('millisecond', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'millisecond', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('second', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'second', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:24'));
  });

  to('minute', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'minute', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:14:14'));
  });

  to('hour', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'hour', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-15T00:04:14'));
  });

  to('day', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'day', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-24T14:04:14'));
  });

  to('week', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(1, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(1, 'week', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-21T14:04:14'));
  });

  to('month', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'month', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2015-02-14T14:04:14'));
  });

  to('year', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(add(10, 'year', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2024-04-14T14:04:14'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.add(4, 'minute', '🙂' as any));
    const valueNode = add(4, 'minute', '🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
