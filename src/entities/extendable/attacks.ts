import { EntityBelongs } from './entity';

export enum AttackTypes {
  fire = 'fire',
  ice = 'ice',
  lightning = 'lightning',
  physical = 'physical',
  water = 'water',
  wind = 'wind',
}

export interface Attack {
  action_cost: number;
  base: 'attack' | 'defense' | 'hp';
  cooldown: number;
  damage_multiplier: number;
  energy_cost?: number;
  icon: string;
  id: string;
  name: string;
  target: EntityBelongs;
  type: AttackTypes;
}

export const asAttacks = <T>(et: { [K in keyof T]: Attack }) => et;
