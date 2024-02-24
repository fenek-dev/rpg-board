import { mulberry32 } from '~/shared/utils/random';

import { createNoise2D } from './noise';

export const getNoiseMap = (seed: number, w: number, h: number) => {
  const prng = mulberry32(seed);
  prng();
  const a = createNoise2D(prng);

  const arr = new Array(h).fill(0).map(() => new Array(w).fill(0));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      arr[i][j] = a(i / 20, j / 20);
    }
  }

  return arr;
};
