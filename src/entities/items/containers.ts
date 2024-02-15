import { asContainers } from '../extendable/containers';

export const CONTAINER_ITEMS = asContainers({
  Foodbag: {
    category: 'container',
    cost: 0,
    description: '',
    h: 2,
    icon: '🛒',
    id: 'Foodbag',
    name: 'Foodbag',
    popup: {
      h: 4,
      w: 6,
    },
    rarity: 'common',
    type: 'container',
    w: 3,
    weight: 20,
  },
  Moneybag: {
    category: 'container',
    cost: 0,
    description: '',
    h: 2,
    icon: '💰',
    id: 'Moneybag',
    name: 'Moneybag',
    popup: {
      h: 3,
      w: 3,
    },
    rarity: 'common',
    type: 'container',
    w: 2,
    weight: 10,
  },
});

export default CONTAINER_ITEMS;
