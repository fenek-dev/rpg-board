export interface Terrain {
  chance: number;
  dangerLevel: number;
  description: string;
  icon: string;
  id: string;
  name: string;
  seed?: number;
  subicon?: string;
}

export const asTerrainCells = <T>(et: { [K in keyof T]: Terrain }) => et;
