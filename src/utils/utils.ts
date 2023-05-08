import { Neo } from "@ast/request/type/asteroids";

export function generateRamdomNum(until: number) {
  return Math.floor(Math.random() * until) + 1;
}

export function sortNeosBy(arr: Neo[] | undefined, prop: keyof Neo) {
  const arrCopy = arr?.slice();
  try {
    return arrCopy?.sort(function (a, b) {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    });
  } catch (error) {
    console.log(error);
  }
}

export function diffDates(from: string, until: string) {
  const timeDiff = Math.abs(
    new Date(from).getTime() - new Date(until).getTime()
  );
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}
