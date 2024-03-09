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

export interface Room {
  cell?: Terrain;
  next: number[];
}

export const generateMap = (seed: number, w: number, h: number) => {
  const prng = mulberry32(seed);

  const table = range(h).map(() => range(w).map(() => ({ next: [] })) as Room[]);

  range(w - 1).forEach(() => {
    let currentRoomIndex = Math.floor(prng() * w);

    range(h).forEach((layer) => {
      let nextRoomIndex = Math.floor(prng() * 3) - 1 + currentRoomIndex;

      if (nextRoomIndex < 0) nextRoomIndex = 0;
      if (nextRoomIndex >= w) nextRoomIndex = w - 1;

      if (table[layer][currentRoomIndex].next.includes(nextRoomIndex)) return;
      table[layer][currentRoomIndex].next.push(nextRoomIndex);
      table[layer][currentRoomIndex].cell = getTerrainFromNoiseValue(prng());
      currentRoomIndex = nextRoomIndex;
    });
  });

  const firstFloorValidRooms = table[0]
    .map((room, index) => room.next.length > 0 && index)
    .filter((i) => i !== false) as number[];
  const start = new Array(w).fill({ next: [] }) as Room[];
  start[Math.floor(start.length / 2)] = { cell: TERRAIN_CELLS.Start, next: firstFloorValidRooms };
  table.unshift(start);

  const end = new Array(w).fill({ next: [] }) as Room[];
  end[Math.floor(end.length / 2)] = { cell: TERRAIN_CELLS.Boss, next: [] };
  table.push(end);
  table[h].forEach((room) => {
    if (room.next.length > 0) room.next = [0];
  });

  const modifiedTable = table.map((layer) => layer.map((room) => ({ ...room, next: Array.from(room.next) })));

  return modifiedTable;
};
