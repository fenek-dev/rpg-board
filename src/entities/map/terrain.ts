import { asTerrainCells } from '../extendable/map';

export const TERRAIN_CELLS = asTerrainCells({
  Beach: {
    className: 'Beach',
    icon: '🏖️',
    name: 'Beach',
  },
  Field: {
    className: 'Field',
    icon: '🌿',
    name: 'Field',
  },
  Forest: {
    className: 'Forest',
    icon: '🌳',
    name: 'Forest',
  },
  Meadow: {
    className: 'Meadow',
    icon: '🌾',
    name: 'Meadow',
  },
  Mountain: {
    className: 'Mountain',
    icon: '⛰️',
    name: 'Mountain',
  },
  Ocean: {
    className: 'Ocean',
    icon: '🌊',
    name: 'Ocean',
  },
  Volcano: {
    className: 'Volcano',
    icon: '🌋',
    name: 'Volcano',
  },
});
