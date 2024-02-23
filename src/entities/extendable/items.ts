import { EffectWithData } from './effects';

export const ItemCategory = {
  consumable: 'consumable',
  container: 'container',
  money: 'money',
  resource: 'resource',
  weapon: 'weapon',
};
export const ItemRarity = {
  common: 'common',
  epic: 'epic',
  legendary: 'legendary',
  rare: 'rare',
};

export interface ItemSizes {
  h: number;
  w: number;
}

export interface Item<Category = keyof typeof ItemCategory, Rarity = keyof typeof ItemRarity> extends ItemSizes {
  category: Category;
  cost: number;
  description: string;
  effects?: EffectWithData[];
  icon: string;
  id: string;
  name: string;
  rarity: Rarity;
  stackable: boolean;
  subicon?: string;
  type: 'item';
  weight: number;
}

export const asItems = <T>(et: { [K in keyof T]: Item }) => et;
