export interface Entity {
  attack: number;
  defense: number;
  h: number;
  hp: number;
  icon: string;
  id: string;
  name: string;
  w: number;
}

export const asEntities = <T>(et: { [K in keyof T]: Entity }) => et;
