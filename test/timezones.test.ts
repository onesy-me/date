/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../utils/js/test/utils';

import { timezones } from '../src/timezones';

group('@amaui/timezones', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  to('Europe/Belgrade', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.timezones.find((timezone: { label: string | string[]; }) => timezone.label.indexOf('Europe/Belgrade') > -1), { browsers });
    const valueNode = timezones.find(timezone => timezone.label.indexOf('Europe/Belgrade') > -1);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql({
      label: 'Europe/Belgrade (GMT+01:00)',
      code: 'Europe/Belgrade',
      name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
      utc: '+01:00',
      abbr: 'CET'
    }));
  });

});
