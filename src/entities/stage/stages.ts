import { CombatTypes } from '~/widgets/combat/store/combat.types';

import { Stages, Terrain } from '../extendable/map';
import { Stage } from '../extendable/stage';
import { FIRST_STAGE } from './first';

export const STAGES: Record<Stages, Stage> = {
  FIRST: FIRST_STAGE,
};

export const getCombatTypeFromTerrain = (terrain: Terrain) => {
  switch (terrain.id) {
    case 'Boss':
      return 'boss';
    case 'Elite':
      return 'elite';
    default:
      return 'combat';
  }
};

export const getLootByType = (stage: Stages, type: CombatTypes) => {
  if (type === 'boss') {
    return STAGES[stage].loot;
  }
  if (type === 'elite') {
    return STAGES[stage].elite_loot;
  }
  return STAGES[stage].loot;
};

export const getEnemiesByType = (stage: Stages, type: CombatTypes) => {
  if (type === 'boss') {
    return STAGES[stage].enemies;
  }
  if (type === 'elite') {
    return STAGES[stage].elite;
  }
  return STAGES[stage].enemies;
};
