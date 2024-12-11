/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, format, set } from '../src';

group('@onesy/date/set', () => {

  to('millisecond', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(440, 'millisecond', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`));
    const valueNode = format(set(440, 'millisecond', new OnesyDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14.440'));
  });

  to('milliseconds', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(1397477044147, 'milliseconds', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(1397477044147, 'milliseconds', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
  });

  to('second', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(4, 'second', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'second', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
  });

  to('minute', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(14, 'minute', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(14, 'minute', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:14:14'));
  });

  to('hour', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(4, 'hour', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'hour', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T04:04:14'));
  });

  to('day', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(4, 'day', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'day', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-04T14:04:14'));
  });

  to('dayWeek', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(4, 'dayWeek', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(4, 'dayWeek', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
  });

  to('dayYear', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(107, 'dayYear', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(107, 'dayYear', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
  });

  to('week', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(14, 'week', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(14, 'week', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-03-31T14:04:14'));
  });

  to('month', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(10, 'month', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(10, 'month', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-11-14T14:04:14'));
  });

  to('year', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.set(2004, 'year', new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'))));
    const valueNode = format(set(2004, 'year', new OnesyDate('2014-04-14T14:04:14.147')));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2004-04-14T14:04:14'));
  });

});
