/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, set } from '../src';

group('@amaui/date/set', () => {

  to('millisecond', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(440, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`));
    const valueNode = format(set(440, 'millisecond', new AmauiDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14.440'));
  });

  to('milliseconds', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(1397477044147, 'milliseconds', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(1397477044147, 'milliseconds', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
  });

  to('second', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'second', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
  });

  to('minute', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(14, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(14, 'minute', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:14:14'));
  });

  to('hour', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'hour', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T04:04:14'));
  });

  to('day', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'day', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-04T14:04:14'));
  });

  to('dayWeek', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'dayWeek', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'dayWeek', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
  });

  to('dayYear', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(107, 'dayYear', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(107, 'dayYear', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
  });

  to('week', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(14, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(14, 'week', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-03-31T14:04:14'));
  });

  to('month', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(10, 'month', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-11-14T14:04:14'));
  });

  to('year', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(2004, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(2004, 'year', new AmauiDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2004-04-14T14:04:14'));
  });

});
