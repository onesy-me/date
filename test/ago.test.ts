/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, ago } from '../src';

group('@amaui/date/ago', () => {

  to('second 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('a few seconds ago'));
  });

  to('second 44', async () => {
    const am = new AmauiDate(new Date().getTime() - (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    // This second precision during testing might be either one of below
    // from time to time, depends on when tests are running but it's within truthy value
    // for this specific AmauiDate method, and will be same for all the values below
    values.forEach(value => assert(value).one.eq(['43 seconds ago', '44 seconds ago']));
  });

  to('second 44 with sufix', async () => {
    const am = new AmauiDate(new Date().getTime() - (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000)), true),);
    const valueNode = ago(am, true);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['43 seconds ago', '44 seconds ago']));
  });

  to('second 44 without sufix', async () => {
    const am = new AmauiDate(new Date().getTime() - (44 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000)), false),);
    const valueNode = ago(am, false);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['43 seconds', '44 seconds']));
  });

  to('minute 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (1 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('a minute ago'));
  });

  to('minute 4', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['3 minutes ago', '4 minutes ago']));
  });

  to('hour 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (1 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('an hour ago'));
  });

  to('hour 4', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['3 hours ago', '4 hours ago']));
  });

  to('day 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('a day ago'));
  });

  to('day 4', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['3 days ago', '4 days ago']));
  });

  to('month 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (1 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('a month ago'));
  });

  to('month 4', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['3 months ago', '4 months ago']));
  });

  to('year 1', async () => {
    const am = new AmauiDate(new Date().getTime() - (1 * 12 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 12 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('a year ago'));
  });

  to('year 4', async () => {
    const am = new AmauiDate(new Date().getTime() - (4 * 12 * 31 * 24 * 60 * 60 * 1000));

    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 12 * 31 * 24 * 60 * 60 * 1000))),);
    const valueNode = ago(am);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).one.eq(['3 years ago', '4 years ago']));
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago('🙂' as any),);
    const valueNode = ago('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
