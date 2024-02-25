import { range } from 'lodash-es';

import { Terrain } from '~/entities/extendable/map';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { mulberry32 } from '~/shared/utils/random';

export const getTerrainFromNoiseValue = (noiseValue: number) => {
  const sum = Object.values(TERRAIN_CELLS).reduce((p, t) => p + t.chance, 0);
  const value = noiseValue * sum;

  let terrain: Terrain | undefined = undefined;
  let prevSum = 0;
  Object.values(TERRAIN_CELLS).forEach((t) => {
    if (t.chance + prevSum >= value && !terrain) {
      terrain = t;
      prevSum += t.chance;
    } else {
      prevSum += t.chance;
    }
  });

  return terrain!;
};

export const generateGraph = (seed: number, w: number, h: number) => {
  const prng = mulberry32(seed);

  const graph: Terrain[][] = [];

  range(h).forEach(() => {
    const chance = prng();
    const width = Math.max(2, range(1, w + 1)[Math.floor(chance * w)]);
    const row: Terrain[] = [];
    range(width).forEach(() => {
      const item = getTerrainFromNoiseValue(prng());
      row.push(item);
    });
    graph.push(row);
  });

  graph.unshift([TERRAIN_CELLS.Start]);
  graph.push([TERRAIN_CELLS.Field]);

  return graph;
};

export const getTurnsUntilFog = (turn: number, fogEvery: number) => fogEvery - (turn % fogEvery);
