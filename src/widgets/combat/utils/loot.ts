import { random } from 'lodash-es';

import { Item } from '~/entities/extendable/items';
import { Loot } from '~/entities/extendable/loot';
import { ITEMS } from '~/entities/items';
import { mulberry32 } from '~/shared/utils/random';
import { Block } from '~/widgets/blocks/store';

export const generateLoot = (loot: Loot[], belongs: string, seed?: number): Block[] => {
  const prng = mulberry32(seed || random(0, Math.pow(2, 32)));
  const sum = loot.reduce((p, t) => p + t.chance, 0);

  return loot
    .filter((l) => prng() * sum < l.chance)

    .map((l) => {
      const amount = Array.isArray(l.amount)
        ? Math.floor(prng() * (l.amount[1] - l.amount[0]) + l.amount[0])
        : l.amount;
      return {
        ...ITEMS[l.id],
        amount,
        belong: belongs,
        exp: 0,
        id: l.id,
        x: 0,
        y: 0,
      } as Block<Item>;
    });
};
