/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { myTimezoneAbbr } from '../src';

group('@amaui/date/myTimezoneAbbr', () => {

  to('myTimezoneAbbr', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.myTimezoneAbbr());
    const valueNode = myTimezoneAbbr();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq((new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2])));
  });

});
