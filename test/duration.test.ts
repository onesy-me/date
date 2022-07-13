/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { duration } from '../src';

group('@amaui/date/duration', () => {

  to('duration', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140),);
    const valueNode = duration(144444444140);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('4 years 7 months 21 days 19 hours 27 minutes 24 seconds 140 milliseconds'));
  });

  to('unitAbr', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true),);
    const valueNode = duration(144444444140, true);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('4 y 7 mo 21 d 19 h 27 m 24 s 140 ms'));
  });

  to('display', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true, ' ', ['year', 'month']),);
    const valueNode = duration(144444444140, true, ' ', ['year', 'month']);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('4 y 7 mo'));
  });

  to('separator', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true, ''),);
    const valueNode = duration(144444444140, true, '');
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq('4y 7mo 21d 19h 27m 24s 140ms'));
  });

});
