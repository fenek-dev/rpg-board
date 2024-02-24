export interface TerrainCell {
  className: string;
  icon: string;
  name: string;
}

export const asTerrainCells = <T>(et: { [K in keyof T]: TerrainCell }) => et;
