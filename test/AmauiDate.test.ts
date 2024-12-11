/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyDate, months, monthsAbr, daysWeek, daysWeekAbr, format } from '../src';

group('@onesy/date/OnesyDate', () => {

  group('OnesyDate', () => {

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.OnesyDate.utc).slice(0, 17));
      const valueNode = format(OnesyDate.utc).slice(0, 17);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 17)));
    });

    to('daysInMonth', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        new window.OnesyDate.OnesyDate('2014-01-14T14:04:14.147').daysInMonth,
        new window.OnesyDate.OnesyDate('2014-02-14T14:04:14.147').daysInMonth,
        new window.OnesyDate.OnesyDate('2014-03-14T14:04:14.147').daysInMonth,
        new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147').daysInMonth,
      ]);
      const valueNode = [
        new OnesyDate('2014-01-14T14:04:14.147').daysInMonth,
        new OnesyDate('2014-02-14T14:04:14.147').daysInMonth,
        new OnesyDate('2014-03-14T14:04:14.147').daysInMonth,
        new OnesyDate('2014-04-14T14:04:14.147').daysInMonth,
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
        new window.OnesyDate.OnesyDate('2014-01-14T14:04:14.147').weeksInYear,
        new window.OnesyDate.OnesyDate('2015-02-14T14:04:14.147').weeksInYear,
        new window.OnesyDate.OnesyDate('2017-03-14T14:04:14.147').weeksInYear,
        new window.OnesyDate.OnesyDate('2020-04-14T14:04:14.147').weeksInYear,
      ]);
      const valueNode = [
        new OnesyDate('2014-01-14T14:04:14.147').weeksInYear,
        new OnesyDate('2015-02-14T14:04:14.147').weeksInYear,
        new OnesyDate('2017-03-14T14:04:14.147').weeksInYear,
        new OnesyDate('2020-04-14T14:04:14.147').weeksInYear,
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
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.OnesyDate.valueOf,);
      const valueNode = OnesyDate.valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e7)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.OnesyDate.unix,);
      const valueNode = OnesyDate.unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e4)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => Math.round(window.OnesyDate.OnesyDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3));
      const valueNode = Math.round(OnesyDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('onesydate', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.OnesyDate.onesydate instanceof window.OnesyDate.OnesyDate,);
      const valueNode = OnesyDate.onesyDate instanceof OnesyDate;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('local', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(window.OnesyDate.OnesyDate.local).slice(0, 14));
      const valueNode = format(OnesyDate.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.OnesyDate.iso.slice(0, 15));
      const valueNode = OnesyDate.iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

  });

  group('onesydate', () => {
    const am = new OnesyDate();

    to('value', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.OnesyDate.OnesyDate().value instanceof Date,);
      const valueNode = am.value instanceof Date;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.millisecond === onesydate.value.getMilliseconds();
      });
      const valueNode = am.millisecond === am.value.getMilliseconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.milliseconds === onesydate.value.getTime();
      });
      const valueNode = am.milliseconds === am.value.getTime();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.second === onesydate.value.getSeconds();
      });
      const valueNode = am.second === am.value.getSeconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.minute === onesydate.value.getMinutes();
      });
      const valueNode = am.minute === am.value.getMinutes();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.hour === onesydate.value.getHours();
      });
      const valueNode = am.hour === am.value.getHours();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.day === onesydate.value.getDate();
      });
      const valueNode = am.day === am.value.getDate();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayWeek', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.dayWeek === onesydate.value.getDay();
      });
      const valueNode = am.dayWeek === am.value.getDay();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayYear', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147');

        return onesydate.dayYear;
      });
      const valueNode = new OnesyDate('2014-04-14T14:04:14.147').dayYear;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(104));
    });

    to('week', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147');

        return onesydate.week;
      });
      const valueNode = new OnesyDate('2014-04-14T14:04:14.147').week;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(16));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.month === (onesydate.value.getMonth() + 1);
      });
      const valueNode = am.month === (am.value.getMonth() + 1);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesydate = new window.OnesyDate.OnesyDate();

        return onesydate.year === onesydate.value.getFullYear();
      });
      const valueNode = am.year === am.value.getFullYear();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    group('options', () => {

      to('utc', async () => {
        const valueBrowsers = await evaluate((window: any) => [
          window.OnesyDate.format(new window.OnesyDate.OnesyDate(undefined, { utc: true })).slice(0, 17),
          window.OnesyDate.format(new window.OnesyDate.OnesyDate(undefined, { utc: false }), `DD/MM/YYYY, HH`),
        ]);
        const valueNode = [
          format(new OnesyDate(undefined, { utc: true })).slice(0, 17),
          format(new OnesyDate(undefined, { utc: false }), `DD/MM/YYYY, HH`),
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
            const onesydate = new window.OnesyDate.OnesyDate();

            return onesydate.months;
          });
          const valueNode = new OnesyDate().months;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(months));
        });

        to('monthsAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const onesydate = new window.OnesyDate.OnesyDate();

            return onesydate.monthsAbr;
          });
          const valueNode = new OnesyDate().monthsAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(monthsAbr));
        });

        to('daysWeek', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const onesydate = new window.OnesyDate.OnesyDate();

            return onesydate.daysWeek;
          });
          const valueNode = new OnesyDate().daysWeek;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(daysWeek));
        });

        to('daysWeekAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const onesydate = new window.OnesyDate.OnesyDate();

            return onesydate.daysWeekAbr;
          });
          const valueNode = new OnesyDate().daysWeekAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(daysWeekAbr));
        });

      });

      group('overrides', () => {

        to('months', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const onesydate = new window.OnesyDate.OnesyDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return onesydate.months;
          });
          const valueNode = new OnesyDate(undefined, {
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
            const onesydate = new window.OnesyDate.OnesyDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return onesydate.monthsAbr;
          });
          const valueNode = new OnesyDate(undefined, {
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
            const onesydate = new window.OnesyDate.OnesyDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return onesydate.daysWeek;
          });
          const valueNode = new OnesyDate(undefined, {
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
            const onesydate = new window.OnesyDate.OnesyDate(undefined, {
              overrides: {
                months: ['Januar'],
                monthsAbr: ['Jan'],
                daysWeek: ['Ponedeljak'],
                daysWeekAbr: ['Pon'],
              },
            });

            return onesydate.daysWeekAbr;
          });
          const valueNode = new OnesyDate(undefined, {
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
          new OnesyDate(),
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
            new window.OnesyDate.OnesyDate(),
            // As new Date() is a default it
            // takes that as a value if undefined is used
            undefined,
          ];

          return values_.map(value => new window.OnesyDate.OnesyDate(value).valid);
        });
        const valueNode = values_.map(value => new OnesyDate(value).valid);
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

          return values_.map(value => new window.OnesyDate.OnesyDate(value).valid);
        });

        const valueNode = values_.map(value => new OnesyDate(value).valid);
        const values = [...valueNode, ...[].concat.apply([], valueBrowsers)];

        values.forEach(value => assert(value).eq(false));
      });

    });

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(new window.OnesyDate.OnesyDate().utc).slice(0, 17));
      const valueNode = format(new OnesyDate().utc).slice(0, 17);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 17)));
    });

    to('local', async () => {
      const am = new OnesyDate();

      const valueBrowsers = await evaluate((window: any) => window.OnesyDate.format(new window.OnesyDate.OnesyDate().local).slice(0, 14));
      const valueNode = format(am.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.OnesyDate.OnesyDate().iso.slice(0, 15));
      const valueNode = new OnesyDate().iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

    to('daysInMonth', async () => {
      const am = new OnesyDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147').daysInMonth,);
      const valueNode = am.daysInMonth;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(30));
    });

    to('valueOf', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.OnesyDate.OnesyDate().valueOf,);
      const valueNode = new OnesyDate().valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e5)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.OnesyDate.OnesyDate().unix,);
      const valueNode = new OnesyDate().unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e2)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('timezone', async () => {
      const am = new OnesyDate('2014-04-14T14:04:14.147');
      const amtz = am.timezone('America/Managua');

      const valueBrowsers = await evaluate((window: any) => { const amb = new window.OnesyDate.OnesyDate('2014-04-14T14:04:14.147'); return [window.OnesyDate.format(amb), window.OnesyDate.format(amb.timezone('America/Managua'))]; },);
      const valueNode = [format(am), format(amtz)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => {
        assert(value[0]).eq('2014-04-14T14:04:14');
        assert(value[1]).eq('2014-04-14T06:04:14');
      });
    });

  });

});
