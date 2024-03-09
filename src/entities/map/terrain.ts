import { asTerrainCells } from '../extendable/map';

export const TERRAIN_CELLS = asTerrainCells({
  Boss: {
    chance: 0,
    icon: '👑',
  },
  Elite: {
    chance: 10,
    icon: '👹',
  },
  Event: {
    chance: 22,
    icon: '🎲',
  },
  Fight: {
    chance: 45,
    icon: '⚔️',
  },
  Merchant: {
    chance: 5,
    icon: '🛒',
  },
  Rest: {
    chance: 12,
    icon: '🛏️',
  },
  Start: {
    chance: 0,
    icon: '🏁',
  },
});
