import { asContainers } from '../extendable/containers';

export const CONTAINER_ITEMS = asContainers({
  Foodbag: {
    category: 'container',
    cost: 0,
    description: '',
    icon: '🛒',
    id: 'Foodbag',
    name: 'Foodbag',
    popup: {
      closable: true,
      h: 4,
      w: 6,
    },
    rarity: 'rare',
    type: 'container',
    weight: 20,
  },
  Moneybag: {
    category: 'container',
    cost: 0,
    description: '',
    icon: '💰',
    id: 'Moneybag',
    name: 'Moneybag',
    popup: {
      closable: true,
      h: 3,
      w: 3,
    },
    rarity: 'common',
    type: 'container',
    weight: 10,
  },
});

export default CONTAINER_ITEMS;
