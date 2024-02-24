import { ITEMS } from '../items';

export interface Loot {
  amount: [number, number];
  chance: number;
  id: keyof typeof ITEMS;
}

export const asLoots = <T>(et: { [K in keyof T]: Loot }) => et;
