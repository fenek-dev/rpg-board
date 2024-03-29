import { asEquipments } from '../../extendable/equipment';

export const RANGE = asEquipments({
  BoneBow: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 2,
    description: '',
    h: 3,
    icon: '🏹',
    id: 'BoneBow',
    name: 'Bone Bow',
    rarity: 'common',
    stats: [],
    subicon: '🦴',
    type: 'weapon',
    w: 2,
  },
  Bow: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 3,
    icon: '🏹',
    id: 'Bow',
    name: 'Bow',
    rarity: 'common',
    stats: [],
    type: 'weapon',
    w: 2,
  },
  BowOfTime: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 3,
    icon: '🏹',
    id: 'BowOfTime',
    name: 'The Bow Of Time',
    rarity: 'legendary',
    stats: [],
    subicon: '⏳',
    type: 'weapon',
    w: 2,
  },
  FireBow: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 4,
    icon: '🏹',
    id: 'FireBow',
    name: 'Fire Bow',
    rarity: 'rare',
    stats: [],
    subicon: '🔥',
    type: 'weapon',
    w: 1,
  },
  IceBow: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 4,
    icon: '🏹',
    id: 'IceBow',
    name: 'Ice Bow',
    rarity: 'rare',
    stats: [],
    subicon: '🧊',
    type: 'weapon',
    w: 1,
  },
});
