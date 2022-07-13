/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, In } from '../src';

group('@amaui/date/in', () => {

  to('second 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in a few seconds'));
  });

  to('second 44', async () => {
    const am = new AmauiDate(new Date().getTime() + (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 43 seconds', 'in 44 seconds']));
  });

  to('second 44 with prefix', async () => {
    const am = new AmauiDate(new Date().getTime() + (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000)), true),);
    const valueNode = In(am, true);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 43 seconds', 'in 44 seconds']));
  });

  to('second 44 without prefix', async () => {
    const am = new AmauiDate(new Date().getTime() + (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000)), false),);
    const valueNode = In(am, false);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['43 seconds', '44 seconds']));
  });

  to('minute 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (1 * 64 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 64 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in a minute'));
  });

  to('minute 4', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 3 minutes', 'in 4 minutes']));
  });

  to('hour 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (1 * 60 * 64 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 60 * 64 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in an hour'));
  });

  to('hour 4', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 3 hours', 'in 4 hours']));
  });

  to('day 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (1 * 25 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 25 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in a day'));
  });

  to('day 4', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 25 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 25 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 3 days', 'in 4 days']));
  });

  to('month 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (1 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in a month'));
  });

  to('month 4', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 3 months', 'in 4 months']));
  });

  to('year 1', async () => {
    const am = new AmauiDate(new Date().getTime() + (1 * 12 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 12 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in a year'));
  });

  to('year 4', async () => {
    const am = new AmauiDate(new Date().getTime() + (4 * 12 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 12 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = In(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['in 3 years', 'in 4 years']));
  });

  to('from', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144'), true, new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.144')),);
    const valueNode = In(new AmauiDate('2014-04-14T14:04:14.144'), true, new AmauiDate('2014-04-10T14:04:14.144'));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('in 4 days'));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In('🙂' as any),);
    const valueNode = In('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
