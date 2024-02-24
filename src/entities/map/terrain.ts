import { asTerrainCells } from '../extendable/map';

export const TERRAIN_CELLS = asTerrainCells({
  Beach: {
    dangerLevel: 2,
    description: 'Beach',
    icon: '🏖️',
    id: 'Beach',
    name: 'Beach',
  },
  Field: {
    dangerLevel: 1,
    description: '',
    icon: '🌿',
    id: 'Field',
    name: 'Field',
  },
  Forest: {
    dangerLevel: 3,
    description: '',
    icon: '🌳',
    id: 'Forest',
    name: 'Forest',
  },
  Meadow: {
    dangerLevel: 2,
    description: '',
    icon: '🌾',
    id: 'Meadow',
    name: 'Meadow',
  },
  Mountain: {
    dangerLevel: 4,
    description: '',
    icon: '⛰️',
    id: 'Mountain',
    name: 'Mountain',
  },
  Ocean: {
    dangerLevel: 3,
    description: '',
    icon: '🌊',
    id: 'Ocean',
    name: 'Ocean',
  },
  Start: {
    dangerLevel: 0,
    description: 'Start',
    icon: '🏁',
    id: 'Start',
    name: 'Start',
  },
  Volcano: {
    dangerLevel: 5,
    description: '',
    icon: '🌋',
    id: 'Volcano',
    name: 'Volcano',
  },
});
