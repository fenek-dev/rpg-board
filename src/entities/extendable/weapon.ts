import { Item } from './items';

export interface Weapon extends Omit<Item, 'stackable' | 'type'> {
  category: 'weapon';
  type: 'melee' | 'range';
}

export const asWeapons = <T>(et: { [K in keyof T]: Weapon }) => et;
