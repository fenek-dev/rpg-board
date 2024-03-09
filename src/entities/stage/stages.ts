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
