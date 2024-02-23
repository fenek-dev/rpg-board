import { GearState } from '~/widgets/gear/store/gear.slice';

import { Item } from './items';

export interface Gear extends Omit<Item, 'stackable' | 'type'> {
  category: 'gear';
  type: keyof GearState;
}

export const asGears = <T>(et: { [K in keyof T]: Gear }) => et;
