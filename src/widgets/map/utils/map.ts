import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { mulberry32 } from '~/shared/utils/random';

import { createNoise2D } from './noise';

export const getNoiseMap = (seed: number, w: number, h: number) => {
  const prng = mulberry32(seed);
  prng();
  const a = createNoise2D(prng);

  const arr = new Array(h).fill(0).map(() => new Array(w).fill(0));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      arr[i][j] = a(i / 10, j / 10);
    }
  }

  return arr;
};

export const getTerrainFromNoiseValue = (noiseValue: number) => {
  const value = noiseValue * 100;
  if (value < -60) return TERRAIN_CELLS.Ocean;
  if (value < -20) return TERRAIN_CELLS.Beach;
  if (value < -10) return TERRAIN_CELLS.Meadow;
  if (value < 20) return TERRAIN_CELLS.Field;
  if (value < 60) return TERRAIN_CELLS.Forest;
  if (value < 87) return TERRAIN_CELLS.Mountain;
  if (value <= 100) return TERRAIN_CELLS.Volcano;
};
