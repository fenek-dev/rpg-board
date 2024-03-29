import { ATTACKS } from '~/entities/combat/attacks';

import { asEquipments } from '../../extendable/equipment';

export const MELEE = asEquipments({
  BoneSword: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: '',
    h: 3,
    icon: '🗡️',
    id: 'BoneSword',
    name: 'Bone Sword',
    rarity: 'common',
    stats: [],
    subicon: '🦴',
    type: 'weapon',
    w: 1,
  },
  FireSword: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 4,
    icon: '🗡️',
    id: 'FireSword',
    name: 'Fire Sword',
    rarity: 'rare',
    stats: [],
    subicon: '🔥',
    type: 'weapon',
    w: 1,
  },
  IceSword: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 4,
    icon: '🗡️',
    id: 'IceSword',
    name: 'Ice Sword',
    rarity: 'rare',
    stats: [],
    subicon: '🧊',
    type: 'weapon',
    w: 1,
  },
  SwordOfTime: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: '',
    h: 4,
    icon: '🗡️',
    id: 'SwordOfTime',
    name: 'The Sword Of Time',
    rarity: 'legendary',
    stats: [],
    subicon: '⏳',
    type: 'weapon',
    w: 1,
  },
  WoodenStaff: {
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: '',
    h: 3,
    icon: '⚚',
    id: 'WoodenStaff',
    name: 'Wooden Staff',
    rarity: 'common',
    stats: [],
    subicon: '🪵',
    type: 'weapon',
    w: 1,
  },
  WoodenSword: {
    attacks: [ATTACKS.BasicAttack],
    basicStats: [{ amount: 1, name: 'attack', type: 'flat' }],
    category: 'equipment',
    cost: 1,
    description: 'Simple wooden sword',
    h: 3,
    icon: '🗡️',
    id: 'WoodenSword',
    name: 'Wooden Sword',
    rarity: 'common',
    stats: [],
    subicon: '🪵',
    type: 'weapon',
    w: 1,
  },
});
