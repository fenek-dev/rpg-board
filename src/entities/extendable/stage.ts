import { ENEMIES } from '../combat/enemies';
import { Loot } from './loot';

export interface Stage {
  elite: StageEnemy[];
  elite_loot: Loot[];
  enemies: StageEnemy[];
  loot: Loot[];
}

export interface StageEnemy {
  chance: number;
  keys: Array<keyof typeof ENEMIES>;
}
