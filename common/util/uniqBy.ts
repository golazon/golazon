// https://stackoverflow.com/a/9229821/219272
export default function uniqBy<T>(arr: T[], key: string): T[] {
  const uniqArr = [];
  return arr.filter((item) => {
    const k = item[key];
    return uniqArr.indexOf(k) >= 0 ? false : uniqArr.push(k);
  });
}
