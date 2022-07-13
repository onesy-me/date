
export default function myTimezoneAbbr(): string {
  let timezoneAbr = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' });

  if (timezoneAbr) timezoneAbr = timezoneAbr.split(' ')[2];

  return timezoneAbr;
}
