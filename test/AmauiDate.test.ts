/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiDate, months, monthsAbr, daysWeek, daysWeekAbr, format } from '../src';

group('@amaui/date/AmauiDate', () => {

  group('AmauiDate', () => {

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.AmauiDate.utc).slice(0, 17));
      const valueNode = format(AmauiDate.utc).slice(0, 17);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 17)));
    });

    to('daysInMonth', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        new window.AmauiDate.AmauiDate('2014-01-14T14:04:14.147').daysInMonth,
        new window.AmauiDate.AmauiDate('2014-02-14T14:04:14.147').daysInMonth,
        new window.AmauiDate.AmauiDate('2014-03-14T14:04:14.147').daysInMonth,
        new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147').daysInMonth,
      ]);
      const valueNode = [
        new AmauiDate('2014-01-14T14:04:14.147').daysInMonth,
        new AmauiDate('2014-02-14T14:04:14.147').daysInMonth,
        new AmauiDate('2014-03-14T14:04:14.147').daysInMonth,
        new AmauiDate('2014-04-14T14:04:14.147').daysInMonth,
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        31,
        28,
        31,
        30,
      ]));
    });

    to('weeksInYear', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        new window.AmauiDate.AmauiDate('2014-01-14T14:04:14.147').weeksInYear,
        new window.AmauiDate.AmauiDate('2015-02-14T14:04:14.147').weeksInYear,
        new window.AmauiDate.AmauiDate('2017-03-14T14:04:14.147').weeksInYear,
        new window.AmauiDate.AmauiDate('2020-04-14T14:04:14.147').weeksInYear,
      ]);
      const valueNode = [
        new AmauiDate('2014-01-14T14:04:14.147').weeksInYear,
        new AmauiDate('2015-02-14T14:04:14.147').weeksInYear,
        new AmauiDate('2017-03-14T14:04:14.147').weeksInYear,
        new AmauiDate('2020-04-14T14:04:14.147').weeksInYear,
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        52,
        53,
        52,
        53,
      ]));
    });

    to('valueOf', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.valueOf,);
      const valueNode = AmauiDate.valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e7)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.unix,);
      const valueNode = AmauiDate.unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e4)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => Math.round(window.AmauiDate.AmauiDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3));
      const valueNode = Math.round(AmauiDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('amauidate', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.amauidate instanceof window.AmauiDate.AmauiDate,);
      const valueNode = AmauiDate.amauiDate instanceof AmauiDate;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('local', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.AmauiDate.local).slice(0, 14));
      const valueNode = format(AmauiDate.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.iso.slice(0, 15));
      const valueNode = AmauiDate.iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

  });

  group('amauidate', () => {
    const am = new AmauiDate();

    to('value', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().value instanceof Date,);
      const valueNode = am.value instanceof Date;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.millisecond === amauidate.value.getMilliseconds();
      });
      const valueNode = am.millisecond === am.value.getMilliseconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.milliseconds === amauidate.value.getTime();
      });
      const valueNode = am.milliseconds === am.value.getTime();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.second === amauidate.value.getSeconds();
      });
      const valueNode = am.second === am.value.getSeconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.minute === amauidate.value.getMinutes();
      });
      const valueNode = am.minute === am.value.getMinutes();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.hour === amauidate.value.getHours();
      });
      const valueNode = am.hour === am.value.getHours();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.day === amauidate.value.getDate();
      });
      const valueNode = am.day === am.value.getDate();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayWeek', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.dayWeek === amauidate.value.getDay();
      });
      const valueNode = am.dayWeek === am.value.getDay();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayYear', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147');

        return amauidate.dayYear;
      });
      const valueNode = new AmauiDate('2014-04-14T14:04:14.147').dayYear;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(104));
    });

    to('week', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147');

        return amauidate.week;
      });
      const valueNode = new AmauiDate('2014-04-14T14:04:14.147').week;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(16));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.month === (amauidate.value.getMonth() + 1);
      });
      const valueNode = am.month === (am.value.getMonth() + 1);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.year === amauidate.value.getFullYear();
      });
      const valueNode = am.year === am.value.getFullYear();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    group('options', () => {

      to('utc', async () => {
        const valueBrowsers = await evaluate((window: any) => [
          window.AmauiDate.format(new window.AmauiDate.AmauiDate(undefined, { utc: true })).slice(0, 17),
          window.AmauiDate.format(new window.AmauiDate.AmauiDate(undefined, { utc: false }), `DD/MM/YYYY, HH`),
        ]);
        const valueNode = [
          format(new AmauiDate(undefined, { utc: true })).slice(0, 17),
          format(new AmauiDate(undefined, { utc: false }), `DD/MM/YYYY, HH`),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          new Date().toISOString().slice(0, 17),
          new Date().toLocaleString().slice(0, 14),
        ]));
      });

      group('default', () => {

        to('months', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.months;
          });
          const valueNode = new AmauiDate().months;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(months));
        });

        to('monthsAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.monthsAbr;
          });
          const valueNode = new AmauiDate().monthsAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(monthsAbr));
        });

        to('daysWeek', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.daysWeek;
          });
          const valueNode = new AmauiDate().daysWeek;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(daysWeek));
        });

        to('daysWeekAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.daysWeekAbr;
          });
          const valueNode = new AmauiDate().daysWeekAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(daysWeekAbr));
        });

      });

      group('overrides', () => {

        to('months', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return amauidate.months;
          });
          const valueNode = new AmauiDate(undefined, {
            overrides: {
              months: ['Januar'],
              monthsAbr: ['Jan'],
              daysWeek: ['Ponedeljak'],
              daysWeekAbr: ['Pon'],
            },
          }).months;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(['Januar']));
        });

        to('monthsAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return amauidate.monthsAbr;
          });
          const valueNode = new AmauiDate(undefined, {
            overrides: {
              months: ['Januar'],
              monthsAbr: ['Jan'],
              daysWeek: ['Ponedeljak'],
              daysWeekAbr: ['Pon'],
            },
          }).monthsAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(['Jan']));
        });

        to('daysWeek', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return amauidate.daysWeek;
          });
          const valueNode = new AmauiDate(undefined, {
            overrides: {
              months: ['Januar'],
              monthsAbr: ['Jan'],
              daysWeek: ['Ponedeljak'],
              daysWeekAbr: ['Pon'],
            },
          }).daysWeek;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(['Ponedeljak']));
        });

        to('daysWeekAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return amauidate.daysWeekAbr;
          });
          const valueNode = new AmauiDate(undefined, {
            overrides: {
              months: ['Januar'],
              monthsAbr: ['Jan'],
              daysWeek: ['Ponedeljak'],
              daysWeekAbr: ['Pon'],
            },
          }).daysWeekAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(['Pon']));
        });

      });

    });

    group('valid', () => {

      to('valid date', async () => {
        const values_ = [
          new Date(),
          new Date(new Date().getTime()),
          new Date().getTime() / 1000,
          new Date().toISOString(),
          new Date().toUTCString(),
          new AmauiDate(),
          // As new Date() is a default it
          // takes that as a value if undefined is used
          undefined,
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const values_ = [
            new Date(),
            new Date(new Date().getTime()),
            new Date().getTime() / 1000,
            new Date().toISOString(),
            new Date().toUTCString(),
            new window.AmauiDate.AmauiDate(),
            // As new Date() is a default it
            // takes that as a value if undefined is used
            undefined,
          ];

          return values_.map(value => new window.AmauiDate.AmauiDate(value).valid);
        });
        const valueNode = values_.map(value => new AmauiDate(value).valid);
        const values = [...valueNode, ...[].concat.apply([], valueBrowsers)];

        values.forEach(value => assert(value).eq(true));
      });

      to('not valid date', async () => {
        const values_ = [
          'a',
          new Date().getTime() / 1e7,
          new Date().getTime() * 1e4,
          NaN,
        ];

        const valueBrowsers = await evaluate((window: any) => {
          const values_ = [
            'a',
            new Date().getTime() / 1e7,
            new Date().getTime() * 1e4,
            NaN,
          ];

          return values_.map(value => new window.AmauiDate.AmauiDate(value).valid);
        });

        const valueNode = values_.map(value => new AmauiDate(value).valid);
        const values = [...valueNode, ...[].concat.apply([], valueBrowsers)];

        values.forEach(value => assert(value).eq(false));
      });

    });

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate().utc).slice(0, 17));
      const valueNode = format(new AmauiDate().utc).slice(0, 17);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 17)));
    });

    to('local', async () => {
      const am = new AmauiDate();

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate().local).slice(0, 14));
      const valueNode = format(am.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().iso.slice(0, 15));
      const valueNode = new AmauiDate().iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

    to('daysInMonth', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147').daysInMonth,);
      const valueNode = am.daysInMonth;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(30));
    });

    to('valueOf', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().valueOf,);
      const valueNode = new AmauiDate().valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e5)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().unix,);
      const valueNode = new AmauiDate().unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e2)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('timezone', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');
      const amtz = am.timezone('America/Managua');

      const valueBrowsers = await evaluate((window: any) => { const amb = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'); return [window.AmauiDate.format(amb), window.AmauiDate.format(amb.timezone('America/Managua'))]; },);
      const valueNode = [format(am), format(amtz)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => {
        assert(value[0]).eq('2014-04-14T14:04:14');
        assert(value[1]).eq('2014-04-14T06:04:14');
      });
    });

  });

});
