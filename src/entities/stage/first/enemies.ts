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
    keys: ['orc'],
  },
  {
    chance: 10,
    keys: ['troll'],
  },
];

export const FIRST_STAGE_BOSSES: StageEnemy[] = [
  {
    chance: 100,
    keys: ['dragon'],
  },
];
