import { random } from 'lodash-es';

import { Item } from '~/entities/extendable/items';
import { Loot } from '~/entities/extendable/loot';
import { Stages } from '~/entities/extendable/map';
import { ITEMS } from '~/entities/items';
import { STAGES, getLootByType } from '~/entities/stage/stages';
import { mulberry32 } from '~/shared/utils/random';
import { Block } from '~/widgets/blocks/store';

import { CombatTypes } from '../store/combat.types';

export const generateLoot = (stage: Stages, belongs: string, type: CombatTypes, seed?: number): Block[] => {
  const prng = mulberry32(seed || random(0, Math.pow(2, 32)));
  const loot: Loot[] = getLootByType(stage, type);

  return loot
    .filter((l) => prng() * 100 <= l.chance)

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
