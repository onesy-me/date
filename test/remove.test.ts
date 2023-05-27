/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, remove } from '../src';

group('@amaui/date/remove', () => {

  to('millisecond', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'millisecond', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('second', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'second', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
  });

  to('minute', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'minute', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T13:54:14'));
  });

  to('hour', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'hour', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T04:04:14'));
  });

  to('day', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'day', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-04T14:04:14'));
  });

  to('week', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(1, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(1, 'week', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-07T14:04:14'));
  });

  to('month', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'month', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2013-06-14T14:04:14'));
  });

  to('year', async () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(remove(10, 'year', am));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2004-04-14T14:04:14'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.remove(4, 'minute', '🙂' as any));
    const valueNode = remove(4, 'minute', '🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
