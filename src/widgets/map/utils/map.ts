import { range } from 'lodash-es';

import { Terrain } from '~/entities/extendable/map';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { mulberry32 } from '~/shared/utils/random';

export const getTerrainFromNoiseValue = (noiseValue: number) => {
  const value = noiseValue * 100;
  if (value < 15) return TERRAIN_CELLS.Beach;
  if (value < 30) return TERRAIN_CELLS.Meadow;
  if (value < 60) return TERRAIN_CELLS.Field;
  if (value < 85) return TERRAIN_CELLS.Forest;
  if (value < 95) return TERRAIN_CELLS.Mountain;
  if (value <= 100) return TERRAIN_CELLS.Volcano;
  return TERRAIN_CELLS.Field;
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
