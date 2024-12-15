import { DateTime } from 'luxon'

const getDiffInMS = (date1: Date, date2: Date) => {
  return Math.abs(date1.getTime() - date2.getTime());
};

export const getTextRepresentationOfDatesDiff = (date1: string, date2: string) => {
  const end = DateTime.fromISO(date2);
  const start = DateTime.fromISO(date1);

  const diff = end.diff(start, ['days', 'hours', 'minutes', 'seconds']).toObject();

  const daysText = diff.days ? (diff.days === 1 ? '1 day' : `${diff.days} days`) : '';
  const hoursText = diff.hours ? (diff.hours < 10 ? `0${diff.hours}` : `${diff.hours}`) : '';
  const minutesText = diff.minutes ? (diff.minutes < 10 ? `0${diff.minutes}` : `${diff.minutes}`) : '';
  const diffSeconds = Math.ceil(diff.seconds || 0);
  const secondsText = diffSeconds < 10 ? `0${diffSeconds}` : diffSeconds;

  return `${daysText} ${hoursText}:${minutesText}:${secondsText}`;
}