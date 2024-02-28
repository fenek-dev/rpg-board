import { Entity } from '~/entities/extendable/entity';

export enum CombatBelongs {
  ENEMY = 'enemy',
  PLAYER = 'player',
}

export interface CombatEntity extends Entity {
  belong: CombatBelongs;
  x: number;
  y: number;
}
