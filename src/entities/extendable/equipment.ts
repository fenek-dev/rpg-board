import { EquipmentState } from '~/widgets/equipment/store/equipment.slice';
import { PlayerState } from '~/widgets/player/store';

import { Attack } from './attacks';
import { Item, ItemRarity } from './items';

export const EQUIPMENT_LEVEL_PROGRESSION_RATES: Record<keyof typeof ItemRarity, number> = {
  common: 1.3,
  epic: 1.7,
  legendary: 2,
  rare: 1.5,
};

export const BASIC_EQUIPMENT_LEVEL_COST = 100;

export interface EquipmentStat {
  amount: number;
  name: keyof PlayerState['stats'];
  type: 'flat' | 'percent';
}

export interface Equipment extends Omit<Item, 'effects' | 'stackable' | 'type'> {
  attacks?: Attack[];
  basicStats: EquipmentStat[];
  category: 'equipment';
  stats: EquipmentStat[];
  type: keyof EquipmentState;
}

export const asEquipments = <T>(et: { [K in keyof T]: Equipment }) => et;
