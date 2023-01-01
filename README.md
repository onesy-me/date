
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Date</h1>

<p align='center'>
  Time and date utils library
</p>

<br />

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

<sup>AmauiDate <b>2.4kb gzipped</b></sup> <br />
<sup>AmauiDate with all the methods <b>5.6kb gzipped</b></sup>  <br />
<sup>AmauiDate with all the methods and all the timezones <b>22kb gzipped</b></sup>

## Getting started

### Add

```sh
  // yarn
  yarn add @amaui/date

  // npm
  npm install @amaui/date
```

### Use

```javascript
  import { AmauiDate, format } from '@amaui/date';

  // Make a new AmauiDate instance
  // with an optional initial value
  const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

  // Value
  amauiDate.value;

  // a Date instance, Mon Apr 14 2014 14:04:14 GMT+0200 (Central European Summer Time)

  // Format
  // with various ways to add regular text and variables
  format(amauiDate, `MM-DD-YYYY '🙂' HH:mm:ss.SSS`);

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
