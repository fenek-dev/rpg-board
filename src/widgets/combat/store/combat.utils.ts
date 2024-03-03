import { random, range } from 'lodash-es';

import { CombatEntity } from './combat.types';

export const getNextAttacks = (entity: CombatEntity) => {
  // TODO: Add chances for different attacks

  return range(entity.stats.action_amount).map(() => entity.attacks[random(0, entity.attacks.length - 1)]);
};
