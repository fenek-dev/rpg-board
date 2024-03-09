import { Attack, AttackTypes } from './attacks';

export enum EntityBelongs {
  ENEMY = 'ENEMY',
  FRIENDLY = 'FRIENDLY',
}

export interface Stats {
  action_amount: number;
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
  attacks: Attack[];
  icon: string;
  id: string;
  name: string;
  stats: Stats;
}

export const asEntities = <T>(et: { [K in keyof T]: Entity }) => et;

export const EMPTY_ENTITY: Entity = {
  attacks: [],
  icon: '',
  id: '',
  name: '',
  stats: {
    action_amount: 0,
    attack: 0,
    crit_chance: 0,
    crit_dmg: 0,
    defense: 0,
    elemental_dmg_bonuses: {
      fire: 0,
      ice: 0,
      lightning: 0,
      physical: 0,
      water: 0,
      wind: 0,
    },
    energy: 0,
    energy_regen: 0,
    healing_bonus: 0,
    hp: 0,
    max_energy: 0,
    max_hp: 0,
    reaction_bonus: 0,
    resistances: {
      fire: 0,
      ice: 0,
      lightning: 0,
      physical: 0,
      water: 0,
      wind: 0,
    },
  },
};
