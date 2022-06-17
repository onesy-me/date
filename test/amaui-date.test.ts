/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../utils/js/test/utils';

import { AmauiDate, months, monthsAbr, daysWeek, daysWeekAbr, format, duration, getTimezoneOffset, In, ago, my, myTimezone, myTimezoneAbbr, add, remove, startOf, endOf, diff, is, set, min, max } from '../src';

group('@amaui/date', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  group('AmauiDate', () => {

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.AmauiDate.utc).slice(0, 17), { browsers });
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
      ], { browsers });
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
      ], { browsers });
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
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.valueOf, { browsers });
      const valueNode = AmauiDate.valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e7)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.unix, { browsers });
      const valueNode = AmauiDate.unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e4)).eq(Math.floor(new Date().getTime() / 1e7)));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => Math.round(window.AmauiDate.AmauiDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3), { browsers });
      const valueNode = Math.round(AmauiDate.milliseconds / 1e3) === Math.round(new Date().getTime() / 1e3);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('amauidate', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.amauidate instanceof window.AmauiDate.AmauiDate, { browsers });
      const valueNode = AmauiDate.amauidate instanceof AmauiDate;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('local', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.AmauiDate.local).slice(0, 14), { browsers });
      const valueNode = format(AmauiDate.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.AmauiDate.iso.slice(0, 15), { browsers });
      const valueNode = AmauiDate.iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

  });

  group('amauidate', () => {
    const am = new AmauiDate();

    to('value', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().value instanceof Date, { browsers });
      const valueNode = am.value instanceof Date;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.millisecond === amauidate.value.getMilliseconds();
      }, { browsers });
      const valueNode = am.millisecond === am.value.getMilliseconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.milliseconds === amauidate.value.getTime();
      }, { browsers });
      const valueNode = am.milliseconds === am.value.getTime();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.second === amauidate.value.getSeconds();
      }, { browsers });
      const valueNode = am.second === am.value.getSeconds();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.minute === amauidate.value.getMinutes();
      }, { browsers });
      const valueNode = am.minute === am.value.getMinutes();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.hour === amauidate.value.getHours();
      }, { browsers });
      const valueNode = am.hour === am.value.getHours();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.day === amauidate.value.getDate();
      }, { browsers });
      const valueNode = am.day === am.value.getDate();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayWeek', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.dayWeek === amauidate.value.getDay();
      }, { browsers });
      const valueNode = am.dayWeek === am.value.getDay();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('dayYear', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147');

        return amauidate.dayYear;
      }, { browsers });
      const valueNode = new AmauiDate('2014-04-14T14:04:14.147').dayYear;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(104));
    });

    to('week', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147');

        return amauidate.week;
      }, { browsers });
      const valueNode = new AmauiDate('2014-04-14T14:04:14.147').week;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(16));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.month === (amauidate.value.getMonth() + 1);
      }, { browsers });
      const valueNode = am.month === (am.value.getMonth() + 1);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const amauidate = new window.AmauiDate.AmauiDate();

        return amauidate.year === amauidate.value.getFullYear();
      }, { browsers });
      const valueNode = am.year === am.value.getFullYear();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    group('options', () => {

      to('utc', async () => {
        const valueBrowsers = await evaluate((window: any) => [
          window.AmauiDate.format(new window.AmauiDate.AmauiDate(undefined, { utc: true })).slice(0, 17),
          window.AmauiDate.format(new window.AmauiDate.AmauiDate(undefined, { utc: false }), `DD/MM/YYYY, HH`),
        ], { browsers });
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
          }, { browsers });
          const valueNode = new AmauiDate().months;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(months));
        });

        to('monthsAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.monthsAbr;
          }, { browsers });
          const valueNode = new AmauiDate().monthsAbr;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(monthsAbr));
        });

        to('daysWeek', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.daysWeek;
          }, { browsers });
          const valueNode = new AmauiDate().daysWeek;
          const values = [valueNode, ...valueBrowsers];

          values.forEach(value => assert(value).eql(daysWeek));
        });

        to('daysWeekAbr', async () => {
          const valueBrowsers = await evaluate((window: any) => {
            const amauidate = new window.AmauiDate.AmauiDate();

            return amauidate.daysWeekAbr;
          }, { browsers });
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
          }, { browsers });
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
          }, { browsers });
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
          }, { browsers });
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
          }, { browsers });
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
        }, { browsers });
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
        }, { browsers });

        const valueNode = values_.map(value => new AmauiDate(value).valid);
        const values = [...valueNode, ...[].concat.apply([], valueBrowsers)];

        values.forEach(value => assert(value).eq(false));
      });

    });

    to('utc', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate().utc).slice(0, 17), { browsers });
      const valueNode = format(new AmauiDate().utc).slice(0, 17);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 17)));
    });

    to('local', async () => {
      const am = new AmauiDate();

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate().local).slice(0, 14), { browsers });
      const valueNode = format(am.local).slice(0, 14);
      const values = [valueNode, ...valueBrowsers];

      const date = new Date();

      values.forEach(value => assert(value).eq(new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 14)));
    });

    to('iso', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().iso.slice(0, 15), { browsers });
      const valueNode = new AmauiDate().iso.slice(0, 15);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(new Date().toISOString().slice(0, 15)));
    });

    to('daysInMonth', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147').daysInMonth, { browsers });
      const valueNode = am.daysInMonth;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(30));
    });

    to('valueOf', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().valueOf, { browsers });
      const valueNode = new AmauiDate().valueOf;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e5)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('unix', async () => {
      const valueBrowsers = await evaluate((window: any) => new window.AmauiDate.AmauiDate().unix, { browsers });
      const valueNode = new AmauiDate().unix;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Math.floor(value / 1e2)).eq(Math.floor(new Date().getTime() / 1e5)));
    });

    to('timezone', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');
      const amtz = am.timezone('America/Managua');

      const valueBrowsers = await evaluate((window: any) => { const amb = new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'); return [window.AmauiDate.format(amb), window.AmauiDate.format(amb.timezone('America/Managua'))]; }, { browsers });
      const valueNode = [format(am), format(amtz)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => {
        assert(value[0]).eq('2014-04-14T14:04:14');
        assert(value[1]).eq('2014-04-14T06:04:14');
      });
    });

  });

  group('min', () => {

    to('min', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.min([
        new window.AmauiDate.AmauiDate('2014-04-14T14:04:14'),
        new window.AmauiDate.AmauiDate('2014-04-17T14:04:14'),
        new window.AmauiDate.AmauiDate('2014-04-14T14:40:14'),
        new window.AmauiDate.AmauiDate('2014-04-14T14:41:14'),
      ])), { browsers });
      const valueNode = format(min([
        new AmauiDate('2014-04-14T14:04:14'),
        new AmauiDate('2014-04-17T14:04:14'),
        new AmauiDate('2014-04-14T14:40:14'),
        new AmauiDate('2014-04-14T14:41:14'),
      ]));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.min([
        '🙂' as any,
      ]), { browsers });
      const valueNode = min([
        '🙂' as any,
      ]);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('max', () => {

    to('max', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.max([
        new window.AmauiDate.AmauiDate('2014-04-14T14:04:14'),
        new window.AmauiDate.AmauiDate('2014-04-17T14:04:14'),
        new window.AmauiDate.AmauiDate('2014-04-14T14:40:14'),
        new window.AmauiDate.AmauiDate('2014-04-14T14:41:14'),
      ])), { browsers });
      const valueNode = format(max([
        new AmauiDate('2014-04-14T14:04:14'),
        new AmauiDate('2014-04-17T14:04:14'),
        new AmauiDate('2014-04-14T14:40:14'),
        new AmauiDate('2014-04-14T14:41:14'),
      ]));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.max([
        '🙂' as any,
      ]), { browsers });
      const valueNode = max([
        '🙂' as any,
      ]);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('set', () => {

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(440, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`), { browsers });
      const valueNode = format(set(440, 'millisecond', new AmauiDate('2014-04-14T14:04:14.147')), `YYYY-MM-DDTHH:mm:ss.SSS`);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14.440'));
    });

    to('milliseconds', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(1397477044147, 'milliseconds', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(1397477044147, 'milliseconds', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(4, 'second', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(14, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(14, 'minute', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:14:14'));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(4, 'hour', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T04:04:14'));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(4, 'day', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-04T14:04:14'));
    });

    to('dayWeek', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(4, 'dayWeek', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(4, 'dayWeek', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
    });

    to('dayYear', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(107, 'dayYear', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(107, 'dayYear', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-17T14:04:14'));
    });

    to('week', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(14, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(14, 'week', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-03-31T14:04:14'));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(10, 'month', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-11-14T14:04:14'));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.set(2004, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(set(2004, 'year', new AmauiDate('2014-04-14T14:04:14.147')));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2004-04-14T14:04:14'));
    });

  });

  group('getTimezoneOffset', () => {

    to('getTimezoneOffset', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset(), { browsers });
      const valueNode = getTimezoneOffset();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Number(value.replace(':', '.')) * -60).eq(new Date().getTimezoneOffset()));
    });

    to('delimiter', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset(undefined, '.'), { browsers });
      const valueNode = getTimezoneOffset(undefined, '.');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(Number(value) * -60).eq(new Date().getTimezoneOffset()));
    });

    to('Daylight Saving Time', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        window.AmauiDate.getTimezoneOffset(new window.AmauiDate.AmauiDate('January 1, 2021')),
        window.AmauiDate.getTimezoneOffset(new window.AmauiDate.AmauiDate('May 1, 2021')),
      ], { browsers });
      const valueNode = [
        getTimezoneOffset(new AmauiDate('January 1')),
        getTimezoneOffset(new AmauiDate('May 1')),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => {
        assert(Number(value[0].replace(':', '.')) * -60).eq(new Date('January 1').getTimezoneOffset());
        assert(Number(value[1].replace(':', '.')) * -60).eq(new Date('May 1').getTimezoneOffset());
      });
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.getTimezoneOffset('🙂' as any), { browsers });
      const valueNode = getTimezoneOffset('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('my', async () => {

    to('amauidate', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.my().amauidate instanceof window.AmauiDate.AmauiDate, { browsers });
      const valueNode = my().amauidate instanceof AmauiDate;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('timezone', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.my().timezone, { browsers });
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

  to('myTimezone', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.myTimezone(), { browsers });
    const valueNode = myTimezone();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(myTimezone()));

    assert(values[1].label).to.be.a('string');
    assert(values[1].code).to.be.a('string');
    assert(values[1].name).to.be.a('string');
    assert(values[1].abbr).to.be.a('string');
    assert(values[1].utc).to.be.a('string');
  });

  to('myTimezoneAbbr', async () => {
    const valueBrowsers = await evaluate((window: any) => window.AmauiDate.myTimezoneAbbr(), { browsers });
    const valueNode = myTimezoneAbbr();
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eq((new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2])));
  });

  group('format', () => {
    const am = new AmauiDate('2014-04-14T14:04:14.147');

    to('words', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), `'a' DD "a" MM \`a\` YYYY {a} [a]`), { browsers });
      const valueNode = format(am, `'a' DD "a" MM \`a\` YYYY {a} [a]`);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(`a 14 a 04 a 2014 a a`));
    });

    to('all used abr', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`), { browsers });
      const valueNode = format(am, `SSSS SSS SS S ss s mm m HH H hh h DD D Do dd d MMMM MMM MM M Mo YYYY A a ZZ Z z X x`);
      const values = [valueNode, ...valueBrowsers];

      const value_ = `0147 147 14 1 14 14 04 4 14 14 02 2 14 14 14th Monday Mon April Apr 04 4 4th 2014 PM pm ${getTimezoneOffset(am, '')} ${getTimezoneOffset(am)} GMT+2 1397477054 1397477054147`;

      values.forEach(value => assert(value).eq(value_));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format('🙂' as any), { browsers });
      const valueNode = format('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('startOf', () => {

    to('second', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'second')), { browsers });
      const valueNode = format(startOf(am, 'second'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
    });

    to('minute', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'minute')), { browsers });
      const valueNode = format(startOf(am, 'minute'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:00'));
    });

    to('hour', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'hour')), { browsers });
      const valueNode = format(startOf(am, 'hour'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:00:00'));
    });

    to('day', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'day')), { browsers });
      const valueNode = format(startOf(am, 'day'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T00:00:00'));
    });

    to('month', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'month')), { browsers });
      const valueNode = format(startOf(am, 'month'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-01T00:00:00'));
    });

    to('year', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.startOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'year')), { browsers });
      const valueNode = format(startOf(am, 'year'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-01-01T00:00:00'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.startOf('🙂' as any), { browsers });
      const valueNode = startOf('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('endOf', () => {

    to('second', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'second')), { browsers });
      const valueNode = format(endOf(am, 'second'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
    });

    to('minute', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'minute')), { browsers });
      const valueNode = format(endOf(am, 'minute'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:59'));
    });

    to('hour', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'hour')), { browsers });
      const valueNode = format(endOf(am, 'hour'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:59:59'));
    });

    to('day', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'day')), { browsers });
      const valueNode = format(endOf(am, 'day'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T23:59:59'));
    });

    to('month', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'month')), { browsers });
      const valueNode = format(endOf(am, 'month'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-30T23:59:59'));
    });

    to('year', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.endOf(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'year')), { browsers });
      const valueNode = format(endOf(am, 'year'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-12-31T23:59:59'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.endOf('🙂' as any), { browsers });
      const valueNode = endOf('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('add', () => {

    to('millisecond', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'millisecond', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
    });

    to('second', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'second', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:24'));
    });

    to('minute', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'minute', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:14:14'));
    });

    to('hour', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'hour', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-15T00:04:14'));
    });

    to('day', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'day', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-24T14:04:14'));
    });

    to('week', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(1, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(1, 'week', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-21T14:04:14'));
    });

    to('month', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'month', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2015-02-14T14:04:14'));
    });

    to('year', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.add(10, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(add(10, 'year', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2024-04-14T14:04:14'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.add(4, 'minute', '🙂' as any), { browsers });
      const valueNode = add(4, 'minute', '🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('remove', () => {

    to('millisecond', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'millisecond', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'millisecond', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:14'));
    });

    to('second', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'second', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'second', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T14:04:04'));
    });

    to('minute', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'minute', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'minute', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T13:54:14'));
    });

    to('hour', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'hour', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'hour', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-14T04:04:14'));
    });

    to('day', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'day', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'day', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-04T14:04:14'));
    });

    to('week', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(1, 'week', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(1, 'week', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2014-04-07T14:04:14'));
    });

    to('month', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'month', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'month', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2013-06-14T14:04:14'));
    });

    to('year', async () => {
      const am = new AmauiDate('2014-04-14T14:04:14.147');

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.format(window.AmauiDate.remove(10, 'year', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'))), { browsers });
      const valueNode = format(remove(10, 'year', am));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('2004-04-14T14:04:14'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.remove(4, 'minute', '🙂' as any), { browsers });
      const valueNode = remove(4, 'minute', '🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('ago', () => {

    to('second 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('a few seconds ago'));
    });

    to('second 44', async () => {
      const am = new AmauiDate(new Date().getTime() - (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      // This second precision during testing might be either one of below
      // from time to time, depends on when tests are running but it's within truthy value
      // for this specific AmauiDate method, and will be same for all the values below
      values.forEach(value => assert(value).one.eq(['43 seconds ago', '44 seconds ago']));
    });

    to('second 44 with sufix', async () => {
      const am = new AmauiDate(new Date().getTime() - (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000)), true), { browsers });
      const valueNode = ago(am, true);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['43 seconds ago', '44 seconds ago']));
    });

    to('second 44 without sufix', async () => {
      const am = new AmauiDate(new Date().getTime() - (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (44 * 1000)), false), { browsers });
      const valueNode = ago(am, false);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['43 seconds', '44 seconds']));
    });

    to('minute 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (1 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('a minute ago'));
    });

    to('minute 4', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['3 minutes ago', '4 minutes ago']));
    });

    to('hour 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (1 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('an hour ago'));
    });

    to('hour 4', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['3 hours ago', '4 hours ago']));
    });

    to('day 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('a day ago'));
    });

    to('day 4', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['3 days ago', '4 days ago']));
    });

    to('month 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (1 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('a month ago'));
    });

    to('month 4', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['3 months ago', '4 months ago']));
    });

    to('year 1', async () => {
      const am = new AmauiDate(new Date().getTime() - (1 * 12 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (1 * 12 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('a year ago'));
    });

    to('year 4', async () => {
      const am = new AmauiDate(new Date().getTime() - (4 * 12 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago(new window.AmauiDate.AmauiDate(new Date().getTime() - (4 * 12 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = ago(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['3 years ago', '4 years ago']));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.ago('🙂' as any), { browsers });
      const valueNode = ago('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('In', () => {

    to('second 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in a few seconds'));
    });

    to('second 44', async () => {
      const am = new AmauiDate(new Date().getTime() + (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 43 seconds', 'in 44 seconds']));
    });

    to('second 44 with prefix', async () => {
      const am = new AmauiDate(new Date().getTime() + (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000)), true), { browsers });
      const valueNode = In(am, true);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 43 seconds', 'in 44 seconds']));
    });

    to('second 44 without prefix', async () => {
      const am = new AmauiDate(new Date().getTime() + (44 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (44 * 1000)), false), { browsers });
      const valueNode = In(am, false);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['43 seconds', '44 seconds']));
    });

    to('minute 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (1 * 64 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 64 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in a minute'));
    });

    to('minute 4', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 3 minutes', 'in 4 minutes']));
    });

    to('hour 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (1 * 60 * 64 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 60 * 64 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in an hour'));
    });

    to('hour 4', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 3 hours', 'in 4 hours']));
    });

    to('day 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (1 * 25 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 25 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in a day'));
    });

    to('day 4', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 25 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 25 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 3 days', 'in 4 days']));
    });

    to('month 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (1 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in a month'));
    });

    to('month 4', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 3 months', 'in 4 months']));
    });

    to('year 1', async () => {
      const am = new AmauiDate(new Date().getTime() + (1 * 12 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (1 * 12 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in a year'));
    });

    to('year 4', async () => {
      const am = new AmauiDate(new Date().getTime() + (4 * 12 * 31 * 24 * 60 * 60 * 1000));

      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate(new Date().getTime() + (4 * 12 * 31 * 24 * 60 * 60 * 1000))), { browsers });
      const valueNode = In(am);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).one.eq(['in 3 years', 'in 4 years']));
    });

    to('from', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144'), true, new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.144')), { browsers });
      const valueNode = In(new AmauiDate('2014-04-14T14:04:14.144'), true, new AmauiDate('2014-04-10T14:04:14.144'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('in 4 days'));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.In('🙂' as any), { browsers });
      const valueNode = In('🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('diff', () => {

    to('millisecond', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.143'), new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144'), 'millisecond'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.144'), new AmauiDate('2014-04-14T14:04:14.143'), 'millisecond');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('second', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('04/14/2014 14:04:13'), 'second'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/14/2014 14:04:13'), 'second');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('minute', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('04/14/2014 14:03:14'), 'minute'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/14/2014 14:03:14'), 'minute');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('hour', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('04/14/2014 13:04:14'), 'hour'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/14/2014 13:04:14'), 'hour');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('day', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('04/13/2014 14:04:14'), 'day'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/13/2014 14:04:14'), 'day');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('month', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('03/14/2014 14:04:14'), 'month'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('03/14/2014 14:04:14'), 'month');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('year', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), new window.AmauiDate.AmauiDate('04/14/2013 14:04:14'), 'year'), { browsers });
      const valueNode = diff(new AmauiDate('2014-04-14T14:04:14.147'), new AmauiDate('04/14/2013 14:04:14'), 'year');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(1));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.diff('🙂' as any, '🙂' as any), { browsers });
      const valueNode = diff('🙂' as any, '🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

  });

  group('is', () => {

    to('before', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144'), 'before', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), { browsers });
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.144'), 'before', new AmauiDate('2014-04-14T14:04:14.147'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('before or same', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), { browsers });
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('same', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), { browsers });
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'same', new AmauiDate('2014-04-14T14:04:14.147'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('between', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'between', new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'day', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147')),
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'between', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147'), 'day', new window.AmauiDate.AmauiDate('2014-04-10T14:04:14.147'))
      ], { browsers });
      const valueNode = [
        is(new AmauiDate('2014-04-14T14:04:14.147'), 'between', new AmauiDate('2014-04-04T14:04:14.147'), 'day', new AmauiDate('2014-04-10T14:04:14.147')),
        is(new AmauiDate('2014-04-04T14:04:14.147'), 'between', new AmauiDate('2014-04-10T14:04:14.147'), 'day', new AmauiDate('2014-04-10T14:04:14.147'))
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        true,
        true,
      ]));
    });

    to('after or same', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'after or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147')), { browsers });
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'after or same', new AmauiDate('2014-04-14T14:04:14.147'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('after', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'after', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.144')), { browsers });
      const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'after', new AmauiDate('2014-04-14T14:04:14.144'));
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('leap-year', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-04-14T14:04:14.147'), 'leap-year'),
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'leap-year'),
      ], { browsers });
      const valueNode = [
        is(new AmauiDate('2020-04-14T14:04:14.147'), 'leap-year'),
        is(new AmauiDate('2014-04-14T14:04:14.147'), 'leap-year'),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        true,
        false,
      ]));
    });

    to('leap-month', async () => {
      const valueBrowsers = await evaluate((window: any) => [
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-02-14T14:04:14.147'), 'leap-month'),
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2020-04-14T14:04:14.147'), 'leap-month'),
        window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'leap-month'),
      ], { browsers });
      const valueNode = [
        is(new AmauiDate('2020-02-14T14:04:14.147'), 'leap-month'),
        is(new AmauiDate('2020-04-14T14:04:14.147'), 'leap-month'),
        is(new AmauiDate('2014-04-14T14:04:14.147'), 'leap-month'),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        true,
        false,
        false,
      ]));
    });

    to('value invalid', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is('🙂' as any, 'after', '🙂' as any), { browsers });
      const valueNode = is('🙂' as any, 'after', '🙂' as any);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(undefined));
    });

    group('units', () => {

      to('millisecond', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.140'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'millisecond'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-14T14:04:14.140'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'millisecond');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('second', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:41.147'), 'second'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:41.147'), 'second');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('minute', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:14:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:41:14.147'), 'minute'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:41:14.147'), 'minute');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('hour', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T15:04:14.147'), 'hour'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T15:04:14.147'), 'hour');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('day', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-04T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'day'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-04T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'day');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('month', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-01-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'month'), { browsers });
        const valueNode = is(new AmauiDate('2014-01-14T14:04:14.147'), 'before or same', new AmauiDate('2014-04-14T14:04:14.147'), 'month');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

      to('year', async () => {
        const valueBrowsers = await evaluate((window: any) => window.AmauiDate.is(new window.AmauiDate.AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new window.AmauiDate.AmauiDate('2041-04-14T14:04:14.147'), 'year'), { browsers });
        const valueNode = is(new AmauiDate('2014-04-14T14:04:14.147'), 'before or same', new AmauiDate('2041-04-14T14:04:14.147'), 'year');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eq(true));
      });

    });

  });

  group('duration', () => {

    to('duration', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140), { browsers });
      const valueNode = duration(144444444140);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('4 years 7 months 21 days 19 hours 27 minutes 24 seconds 140 milliseconds'));
    });

    to('unitAbr', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true), { browsers });
      const valueNode = duration(144444444140, true);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('4 y 7 mo 21 d 19 h 27 m 24 s 140 ms'));
    });

    to('display', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true, ' ', ['year', 'month']), { browsers });
      const valueNode = duration(144444444140, true, ' ', ['year', 'month']);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('4 y 7 mo'));
    });

    to('separator', async () => {
      const valueBrowsers = await evaluate((window: any) => window.AmauiDate.duration(144444444140, true, ''), { browsers });
      const valueNode = duration(144444444140, true, '');
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq('4y 7mo 21d 19h 27m 24s 140ms'));
    });

  });

});
