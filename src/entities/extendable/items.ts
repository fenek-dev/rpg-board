export const ItemCategory = {
  consumable: 'consumable',
  container: 'container',
  resource: 'resource',
};
export const ItemRarity = {
  common: 'common',
  epic: 'epic',
  legendary: 'legendary',
  rare: 'rare',
};

export interface Item<Category = keyof typeof ItemCategory, Rarity = keyof typeof ItemRarity> {
  category: Category;
  cost: number;
  description: string;
  h: number;
  icon: string;
  id: string;
  name: string;
  rarity: Rarity;
  type: 'item';
  w: number;
  weight: number;
}

export const asItems = <T>(et: { [K in keyof T]: Item }) => et;
