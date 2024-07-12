import getTimeFromDate from "./getTimefFromDate";
import toLocalISOString from "./toLocalISOString";

export function checkIfTaskExpired(date: Date): boolean {
  return toLocalISOString(date) < toLocalISOString(new Date());
}

export function checkIfTaskExpiringToday(date: Date, time: string): boolean {
  const dayDifference = date.getDate() - new Date().getDate();
  return dayDifference === 0 && getTimeFromDate(date) < time;
}
