// PRNG
export function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const getItemByChance = <Item extends { chance: number }>(noise: number, items: Item[]) => {
  const sum = items.reduce((p, t) => p + t.chance, 0);
  const value = noise * sum;

  let item: Item;
  let prevSum = 0;
  items.forEach((t) => {
    if (t.chance + prevSum >= value && !item) {
      item = t;
      prevSum += t.chance;
    } else {
      prevSum += t.chance;
    }
  });

  return item!;
};
