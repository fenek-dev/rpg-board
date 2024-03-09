import { asContainers } from '../extendable/containers';

export const CONTAINERS = asContainers({
  Foodbag: {
    accept: 'consumable',
    category: 'container',
    cost: 0,
    description: '',
    h: 2,
    icon: '🛒',
    id: 'Foodbag',
    name: 'Foodbag',
    popup: {
      h: 3,
      w: 3,
    },
    rarity: 'rare',
    type: 'container',
    w: 2,
  },
});
