/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, my } from '../src';

group('@amaui/date/my', () => {

  to('amauidate', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.my().amauidate instanceof window.AmauiDate.AmauiDate,);
    const valueNode = my().amauidate instanceof AmauiDate;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('timezone', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.my().timezone,);
    const valueNode = my().timezone;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(my().timezone));

    assert(values[1].label).to.be.a('string');
    assert(values[1].code).to.be.a('string');
    assert(values[1].name).to.be.a('string');
    assert(values[1].abbr).to.be.a('string');
    assert(values[1].utc).to.be.a('string');
  });

});
