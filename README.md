
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Date</h1>

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>min 2.4kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Tree shakable&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
    <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Made with :yellow_heart:</sub>
</p>

<br />

#### Sizes

<sup>OnesyDate <b>2.4kb gzipped</b></sup> <br />
<sup>OnesyDate with all the methods <b>5.6kb gzipped</b></sup>  <br />
<sup>OnesyDate with all the methods and all the timezones <b>22kb gzipped</b></sup>

## Getting started

### Add

```sh
yarn add @onesy/date
```

### Use

```javascript
  import { OnesyDate, format } from '@onesy/date';

  // Make a new OnesyDate instance
  // with an optional initial value
  const onesyDate = new OnesyDate('2014-04-14T14:04:14.147');

  // Value
  onesyDate.value;

  // a Date instance, Mon Apr 14 2014 14:04:14 GMT+0200 (Central European Summer Time)

  // Format
  // with various ways to add regular text and variables
  format(onesyDate, `MM-DD-YYYY '🙂' HH:mm:ss.SSS`);

  // '04-14-2014 🙂 14:04:14.147'
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
