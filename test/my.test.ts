/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, my } from '../src';

group('@onesy/date/my', () => {

  to('onesyDate', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.my().onesyDate instanceof window.OnesyDate.OnesyDate,);
    const valueNode = my().onesyDate instanceof OnesyDate;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq(true));
  });

  to('timezone', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.my().timezone,);
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
