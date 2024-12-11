/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, diff } from '../src';

group('@onesy/date/diff', () => {

  to('millisecond', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.143'), new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.144'), 'millisecond'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.144'), new OnesyDate('2014-04-14T14:04:14.143'), 'millisecond');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('second', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('04/14/2014 14:04:13'), 'second'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/14/2014 14:04:13'), 'second');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('minute', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('04/14/2014 14:03:14'), 'minute'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/14/2014 14:03:14'), 'minute');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('hour', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('04/14/2014 13:04:14'), 'hour'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/14/2014 13:04:14'), 'hour');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('day', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('04/13/2014 14:04:14'), 'day'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/13/2014 14:04:14'), 'day');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('month', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('03/14/2014 14:04:14'), 'month'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('03/14/2014 14:04:14'), 'month');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('year', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), new window.OnesyDate.OnesyDate('04/14/2013 14:04:14'), 'year'));
    const valueNode = diff(new OnesyDate('2014-04-14T14:04:14.147'), new OnesyDate('04/14/2013 14:04:14'), 'year');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(1));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.diff('🙂' as any, '🙂' as any));
    const valueNode = diff('🙂' as any, '🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
