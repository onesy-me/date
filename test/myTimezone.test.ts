/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { myTimezone } from '../src';

group('@amaui/date/myTimezone', () => {

  to('myTimezone', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.myTimezone());
    const valueNode = myTimezone();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(myTimezone()));

    assert(values[1].label).to.be.a('string');
    assert(values[1].code).to.be.a('string');
    assert(values[1].name).to.be.a('string');
    assert(values[1].abbr).to.be.a('string');
    assert(values[1].utc).to.be.a('string');
  });

});
