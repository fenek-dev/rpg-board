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

export const getTerrainIconFromNoiseValue = (noiseValue: number) => {
  const value = noiseValue * 100;
  if (value < -60) return '🌊';
  if (value < -20) return '🌴';
  if (value < -10) return '🌾';
  if (value < 40) return '🌿';
  if (value < 70) return '🌳';
  if (value <= 100) return '⛰️';
};
