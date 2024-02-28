export enum CombatBelongs {
  ENEMY = 'enemy',
  PLAYER = 'player',
}

export interface CombatEntity {
  belong: CombatBelongs;
  h: number;
  icon: string;
  id: string;
  w: number;
  x: number;
  y: number;
}
