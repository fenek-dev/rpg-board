import { random, range } from 'lodash-es';

import { ENEMIES } from '~/entities/combat/enemies';
import { EntityBelongs } from '~/entities/extendable/entity';
import { Stages } from '~/entities/extendable/map';
import { StageEnemy } from '~/entities/extendable/stage';
import { STAGES } from '~/entities/stage/stages';
import { getItemByChance, mulberry32 } from '~/shared/utils/random';

import { CombatEntity, CombatTypes } from './combat.types';

export const getNextAttacks = (entity: CombatEntity) => {
  // TODO: Add chances for different attacks

  return range(entity.stats.action_amount).map(() => entity.attacks[random(0, entity.attacks.length - 1)]);
};

export const getEnemiesByStageAndType = (stageName: Stages, type: CombatTypes, seed: number) => {
  const prng = mulberry32(seed);
  const stage = STAGES[stageName];

  let enemies: StageEnemy[] = [];

  if (type === 'boss') {
    enemies = stage.enemies;
  }
  if (type === 'elite') {
    enemies = stage.elite;
  }
  if (type === 'combat') {
    enemies = stage.enemies;
  }

  const keys = getItemByChance(prng(), enemies).keys;

  const combatEnemies = keys.map((key) => {
    return {
      ...ENEMIES[key],
      actions_left: ENEMIES[key].stats.action_amount,
      belongs: EntityBelongs.ENEMY,
    } as CombatEntity;
  });

  return combatEnemies;
};
