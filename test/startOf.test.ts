/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, format, startOf } from '../src';

group('@onesy/date/startOf', () => {

  to('second', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'second')));
    const valueNode = format(startOf(am, 'second'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
  });

  to('minute', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'minute')));
    const valueNode = format(startOf(am, 'minute'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:04:00'));
  });

  to('hour', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'hour')));
    const valueNode = format(startOf(am, 'hour'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T14:00:00'));
  });

  to('day', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'day')));
    const valueNode = format(startOf(am, 'day'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-14T00:00:00'));
  });

  to('month', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'month')));
    const valueNode = format(startOf(am, 'month'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-04-01T00:00:00'));
  });

  to('year', async () => {
    const am = new OnesyDate('2014-04-14T14:04:14.147');

    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.startOf(new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'), 'year')));
    const valueNode = format(startOf(am, 'year'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('2014-01-01T00:00:00'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.startOf('🙂' as any));
    const valueNode = startOf('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
