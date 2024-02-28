import { GearState } from '~/widgets/gear/store/gear.slice';
import { PlayerState } from '~/widgets/player/store';

import { Item, ItemRarity } from './items';

export const GEAR_LEVEL_PROGRESSION_RATES: Record<keyof typeof ItemRarity, number> = {
  common: 1.3,
  epic: 1.7,
  legendary: 2,
  rare: 1.5,
};

export const BASIC_GEAR_LEVEL_COST = 100;

export interface GearStat {
  amount: number;
  name: keyof PlayerState['stats'];
}

export interface Gear extends Omit<Item, 'effects' | 'stackable' | 'type'> {
  basicStats: GearStat[];
  category: 'gear';
  stats: GearStat[];
  type: keyof GearState;
}

export const asGears = <T>(et: { [K in keyof T]: Gear }) => et;
