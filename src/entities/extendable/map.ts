export type DangerLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface TerrainCell {
  className: string;
  dangerLevel: DangerLevels;
  description: string;
  icon: string;
  id: string;
  name: string;
}

export const asTerrainCells = <T>(et: { [K in keyof T]: TerrainCell }) => et;
