import { asTerrainCells } from '../extendable/map';

export const TERRAIN_CELLS = asTerrainCells({
  BanditCamp: {
    chance: 10,
    dangerLevel: 4,
    description: '',
    icon: '🏕️',
    id: 'BanditCamp',
    name: 'Bandit Camp',
  },
  Beach: {
    chance: 15,
    dangerLevel: 2,
    description: 'Beach',
    icon: '🏖️',
    id: 'Beach',
    name: 'Beach',
  },
  Desert: {
    chance: 10,
    dangerLevel: 3,
    description: 'Desert',
    icon: '🏜️',
    id: 'Desert',
    name: 'Desert',
  },
  Field: {
    chance: 25,
    dangerLevel: 1,
    description: '',
    icon: '🌿',
    id: 'Field',
    name: 'Field',
  },
  Forest: {
    chance: 30,
    dangerLevel: 3,
    description: '',
    icon: '🌳',
    id: 'Forest',
    name: 'Forest',
  },
  Graveyard: {
    chance: 5,
    dangerLevel: 6,
    description: '',
    icon: '🪦',
    id: 'Graveyard',
    name: 'Graveyard',
    subicon: '💀',
  },
  Meadow: {
    chance: 20,
    dangerLevel: 2,
    description: '',
    icon: '🌾',
    id: 'Meadow',
    name: 'Meadow',
  },
  Mountain: {
    chance: 15,
    dangerLevel: 4,
    description: '',
    icon: '⛰️',
    id: 'Mountain',
    name: 'Mountain',
  },
  Ruins: {
    chance: 2,
    dangerLevel: 5,
    description: '',
    icon: '🏚️',
    id: 'Ruins',
    name: 'Ruins',
  },
  SpiderForest: {
    chance: 4,
    dangerLevel: 4,
    description: '',
    icon: '🌲',
    id: 'SpiderForest',
    name: 'Spider Forest',
    subicon: '🕸️',
  },
  Start: {
    chance: 0,
    dangerLevel: 0,
    description: 'Start',
    icon: '🏁',
    id: 'Start',
    name: 'Start',
  },
  Village: {
    chance: 15,
    dangerLevel: 0,
    description: '',
    icon: '🛖',
    id: 'Village',
    name: 'Village',
  },
  Volcano: {
    chance: 3,
    dangerLevel: 5,
    description: '',
    icon: '🌋',
    id: 'Volcano',
    name: 'Volcano',
  },
});