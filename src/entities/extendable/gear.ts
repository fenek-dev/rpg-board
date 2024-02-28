import { GearState } from '~/widgets/gear/store/gear.slice';
import { PlayerState } from '~/widgets/player/store';

import { Item } from './items';

export interface GearStat {
  amount: number;
  name: keyof PlayerState['stats'];
}

export interface Gear extends Omit<Item, 'effects' | 'stackable' | 'type'> {
  category: 'gear';
  stats: GearStat[];
  type: keyof GearState;
}

export const asGears = <T>(et: { [K in keyof T]: Gear }) => et;
