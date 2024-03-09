export interface Terrain {
  chance: number;
  icon: string;
  id: string;
  seed?: number;
  subicon?: string;
}

export const asTerrainCells = <T>(et: { [K in keyof T]: Terrain }) => et;
