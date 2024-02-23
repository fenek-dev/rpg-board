import { asItems } from '../extendable/items';

export const MONEY = asItems({
  SilverCoin: {
    category: 'money',
    cost: 1,
    description: 'Shiny silver coin. Can be useful for trading or buying stuff.',
    icon: '🪙',
    id: 'SilverCoin',
    name: 'Silver coin',
    rarity: 'rare',
    stackable: true,
    type: 'item',
    weight: 1,
  },
});
