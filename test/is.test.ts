/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, is } from '../src';

group('@amaui/date/is', () => {

  to('before', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144'), 'before', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')),);
    const valueNode = is(new AmauiDate('2014-04-14T14:04:14.144'), 'before', new AmauiDate('2014-04-14T14:04:14.147'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('before or same', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')),);
    const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('same', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')),);
    const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'same', new AmauiDate('2014-04-14T14:04:14.147'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('between', async () => {
    const valueBrowsers = await evaluate((window: any) => [
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'between', new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'day', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147')),
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'between', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147'), 'day', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147'))
    ]);
    const valueNode = [
      is(new AmauiDate('2014-04-14T14:04:14.147'), 'between', new AmauiDate('2014-04-04T14:04:14.147'), 'day', new AmauiDate('2014-04-10T14:04:14.147')),
      is(new AmauiDate('2014-04-04T14:04:14.147'), 'between', new AmauiDate('2014-04-10T14:04:14.147'), 'day', new AmauiDate('2014-04-10T14:04:14.147'))
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      true,
      true,
    ]));
  });

  to('after or same', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'after or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')),);
    const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'after or same', new AmauiDate('2014-04-14T14:04:14.147'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('after', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'after', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144')),);
    const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'after', new AmauiDate('2014-04-14T14:04:14.144'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('leap-year', async () => {
    const valueBrowsers = await evaluate((window: any) => [
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-04-14T14:04:14.147'), 'leap-year'),
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'leap-year'),
    ]);
    const valueNode = [
      is(new AmauiDate('2020-04-14T14:04:14.147'), 'leap-year'),
      is(new AmauiDate('2014-04-14T14:04:14.147'), 'leap-year'),
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      true,
      false,
    ]));
  });

  to('leap-month', async () => {
    const valueBrowsers = await evaluate((window: any) => [
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-02-14T14:04:14.147'), 'leap-month'),
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-04-14T14:04:14.147'), 'leap-month'),
      window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'leap-month'),
    ]);
    const valueNode = [
      is(new AmauiDate('2020-02-14T14:04:14.147'), 'leap-month'),
      is(new AmauiDate('2020-04-14T14:04:14.147'), 'leap-month'),
      is(new AmauiDate('2014-04-14T14:04:14.147'), 'leap-month'),
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      true,
      false,
      false,
    ]));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is('🙂' as any, 'after', '🙂' as any),);
    const valueNode = is('🙂' as any, 'after', '🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

  group('units', () => {

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.140'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'millisecond'),);
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.140'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'millisecond');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:41.147'), 'second'),);
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:41.147'), 'second');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:14:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:41:14.147'), 'minute'),);
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:41:14.147'), 'minute');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T15:04:14.147'), 'hour'),);
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T15:04:14.147'), 'hour');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'day'),);
      const valueNode = is(new AmauiDate('2014-04-04T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'day');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-01-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'month'),);
      const valueNode = is(new AmauiDate('2014-01-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'month');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2041-04-14T14:04:14.147'), 'year'),);
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2041-04-14T14:04:14.147'), 'year');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

  });

});
