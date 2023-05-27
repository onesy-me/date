/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, format, getTimezoneOffset } from '../src';

group('@amaui/date/format', () => {
  const sunday = new AmauiDate('2014-04-13T14:04:14.147');
  const monday = new AmauiDate('2014-04-14T14:04:14.147');

  to('words', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), `'a' DD "a" MM \`a\` YYYY {a} [a]`));
    const valueNode = format(monday, `'a' DD "a" MM \`a\` YYYY {a} [a]`);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(`a 14 a 04 a 2014 a a`));
  });

  group('all format values', () => {
    to('Sunday', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate('2014-04-13T14:04:14.147'), `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`));
      const valueNode = format(sunday, `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`);
      const values = [valueNode, ...valueBrowsers];

      const value_ = `0147 147 14 1 14 14 04 4 14 14 02 2 13 13 13th Sunday Sun April Apr 04 4 4th 2014 PM pm ${getTimezoneOffset(sunday, '')} ${getTimezoneOffset(sunday)} GMT+2 1397390654 1397390654147`;

      values.forEach(value => assert(value).eq(value_));
    });

    to('Monday', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`));
      const valueNode = format(monday, `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`);
      const values = [valueNode, ...valueBrowsers];

      const value_ = `0147 147 14 1 14 14 04 4 14 14 02 2 14 14 14th Monday Mon April Apr 04 4 4th 2014 PM pm ${getTimezoneOffset(monday, '')} ${getTimezoneOffset(monday)} GMT+2 1397477054 1397477054147`;

      values.forEach(value => assert(value).eq(value_));
    });
  });

  to('value invalid', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format('🙂' as any));
    const valueNode = format('🙂' as any);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(undefined));
  });

});
