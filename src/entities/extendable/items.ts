export const ItemCategory = {
  consumable: 'consumable',
  container: 'container',
  money: 'money',
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
  icon: string;
  id: string;
  name: string;
  rarity: Rarity;
  stackable: boolean;
  type: 'item';
  weight: number;
}

export const asItems = <T>(et: { [K in keyof T]: Item }) => et;
