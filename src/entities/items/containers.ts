import { asContainers } from '../extendable/containers';

export const CONTAINER_ITEMS = asContainers({
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
      closable: true,
      h: 3,
      w: 3,
    },
    rarity: 'rare',
    type: 'container',
    w: 2,
    weight: 20,
  },
});

export default CONTAINER_ITEMS;
