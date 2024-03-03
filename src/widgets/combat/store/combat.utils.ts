import { random } from 'lodash-es';

import { CombatEntity } from './combat.types';

export const getNextAttack = (entity: CombatEntity) => {
  // TODO: Add chances for different attacks
  return entity.attacks[random(0, entity.attacks.length - 1)];
};
