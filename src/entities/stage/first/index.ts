import { Stage } from '~/entities/extendable/stage';

import { FIRST_STAGE_ELITES, FIRST_STAGE_ENEMIES } from './enemies';
import { FIRST_STAGE_LOOT } from './loot';

export const FIRST_STAGE: Stage = {
  elite: FIRST_STAGE_ELITES,
  elite_loot: [],
  enemies: FIRST_STAGE_ENEMIES,
  loot: FIRST_STAGE_LOOT,
};
