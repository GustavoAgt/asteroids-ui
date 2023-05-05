import { Neo } from "@ast/request/type/asteroids";

export function generateRamdomNum(until: number) {
  return Math.floor(Math.random() * until) + 1;
}

export function sortArrObj(arr: Neo[] | undefined, prop: keyof Neo) {
  try {
    return arr?.sort(function (a, b) {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    });
  } catch (error) {}
}
