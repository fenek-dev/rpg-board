import { AttackTypes } from './attacks';

export enum EntityBelongs {
  ENEMY = 'ENEMY',
  FRIENDLY = 'FRIENDLY',
}

export interface Stats {
  attack: number;
  crit_chance: number;
  crit_dmg: number;
  defense: number;
  elemental_dmg_bonuses: Record<AttackTypes, number>;
  energy: number;
  energy_regen: number;
  healing_bonus: number;
  hp: number;
  max_energy: number;
  max_hp: number;
  reaction_bonus: number;
  resistances: Record<AttackTypes, number>;
}

export interface Entity {
  icon: string;
  id: string;
  name: string;
  stats: Stats;
}

export const asEntities = <T>(et: { [K in keyof T]: Entity }) => et;
