import { StageEnemy } from '~/entities/extendable/stage';

export const FIRST_STAGE_ENEMIES: StageEnemy[] = [
  {
    chance: 20,
    keys: ['goblin', 'goblin', 'goblin'],
  },
  {
    chance: 10,
    keys: ['troll', 'goblin'],
  },
];

export const FIRST_STAGE_ELITES: StageEnemy[] = [
  {
    chance: 20,
    keys: ['dragon'],
  },
  {
    chance: 10,
    keys: ['troll'],
  },
];
