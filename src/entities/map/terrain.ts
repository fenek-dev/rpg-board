import { asTerrainCells } from '../extendable/map';

export const TERRAIN_CELLS = asTerrainCells({
  Boss: {
    chance: 0,
    icon: '👑',
    id: 'Boss',
  },
  Elite: {
    chance: 10,
    icon: '👹',
    id: 'Elite',
  },
  Event: {
    chance: 22,
    icon: '🎲',
    id: 'Event',
  },
  Fight: {
    chance: 45,
    icon: '⚔️',
    id: 'Fight',
  },
  Merchant: {
    chance: 5,
    icon: '🛒',
    id: 'Merchant',
  },
  Rest: {
    chance: 12,
    icon: '🛏️',
    id: 'Rest',
  },
  Start: {
    chance: 0,
    icon: '🏁',
    id: 'Start',
  },
});
