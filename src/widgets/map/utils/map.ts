import { range } from 'lodash-es';

import { Terrain } from '~/entities/extendable/map';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { mulberry32 } from '~/shared/utils/random';

export const getTerrainFromNoiseValue = (noiseValue: number) => {
  const cells = Object.values(TERRAIN_CELLS);
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

  const seed = Math.floor(noiseValue * Math.pow(2, 32));

  return { ...terrain!, seed };
};

export const generateGraph = (seed: number, w: number, h: number, min_level: number, max_level: number) => {
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
  graph.push([TERRAIN_CELLS.Boss]);

  return graph;
};

interface Room {
  cell: Terrain;
  last?: boolean;
  next: Set<number>;
}

export const generateMap = (seed: number, w: number, h: number) => {
  const prng = mulberry32(seed);

  const table = range(h).map(() => range(w).map(() => ({ next: new Set() })) as Room[]);

  range(w - 1).forEach(() => {
    let currentRoomIndex = Math.floor(prng() * w);

    range(h).forEach((layer) => {
      let nextRoomIndex = Math.floor(prng() * 3) - 1 + currentRoomIndex;

      if (nextRoomIndex < 0) nextRoomIndex = 0;
      if (nextRoomIndex >= w) nextRoomIndex = w - 1;

      table[layer][currentRoomIndex].next.add(nextRoomIndex);
      table[layer][currentRoomIndex].cell = getTerrainFromNoiseValue(prng());
      currentRoomIndex = nextRoomIndex;
    });
  });

  const firstFloorValidRooms = table[0]
    .map((room, index) => room.next.size > 0 && index)
    .filter((i) => i !== false) as number[];
  table.unshift([{ cell: TERRAIN_CELLS.Start, next: new Set(firstFloorValidRooms) }]);

  table.push([{ cell: TERRAIN_CELLS.Boss, last: true, next: new Set() }]);
  table[h].forEach((room) => {
    if (room.next.size > 0) room.next = new Set([0]);
  });

  return table;
};
