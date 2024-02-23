import { asContainers } from '../extendable/containers';

export const CONTAINER_ITEMS = asContainers({
  Foodbag: {
    accept: 'consumable',
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
});

export default CONTAINER_ITEMS;
