import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isToday, isYesterday, isThisWeek, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(dateString: string) {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return format(date, 'p'); // Show the time if it's today
  } else if (isYesterday(date)) {
    return 'Kemarin'; // Show 'Kemarin' if it's yesterday
  } else if (isThisWeek(date)) {
    return format(date, 'iii', { locale: id }); // Show the day of the week if it's this week
  } else {
    return format(date, 'dd/MM/yy'); // Show the date in dd/mm/yy format if it's older than a week
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateThumbnail = (a: string, b: string) =>
  `https://avatar.vercel.sh/${a}-${b}`;

export const fetcher = (...args: [input: RequestInfo, init?: RequestInit]) =>
  fetch(...args).then((res) => res.json());
