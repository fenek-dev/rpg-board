import { range } from 'lodash-es';

import { Terrain } from '~/entities/extendable/map';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { mulberry32 } from '~/shared/utils/random';

export const getTerrainFromNoiseValue = (noiseValue: number, min_level: number, max_level: number) => {
  const cells = Object.values(TERRAIN_CELLS).filter(
    (t) => t.dangerLevel === 0 || (t.dangerLevel >= min_level && t.dangerLevel <= max_level)
  );
  const sum = cells.reduce((p, t) => p + t.chance, 0);
  const value = noiseValue * sum;

  let terrain: Terrain | undefined = undefined;
  let prevSum = 0;
  cells.forEach((t) => {
    if (t.chance + prevSum >= value && !terrain) {
      terrain = t;
      prevSum += t.chance;
    } else {
      prevSum += t.chance;
    }
  });

  return terrain!;
};

export const generateGraph = (seed: number, w: number, h: number, min_level: number, max_level: number) => {
  const prng = mulberry32(seed);

  const graph: Terrain[][] = [];

  range(h).forEach(() => {
    const chance = prng();
    const width = Math.max(2, range(1, w + 1)[Math.floor(chance * w)]);
    const row: Terrain[] = [];
    range(width).forEach(() => {
      const item = getTerrainFromNoiseValue(prng(), min_level, max_level);
      row.push(item);
    });
    graph.push(row);
  });

  graph.unshift([TERRAIN_CELLS.Start]);
  graph.push([TERRAIN_CELLS.Field]);

  return graph;
};
