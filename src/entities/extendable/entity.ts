export interface Entity {
  attack: number;
  defense: number;
  hp: number;
  icon: string;
  id: string;
  name: string;
}

export const asEntities = <T>(et: { [K in keyof T]: Entity }) => et;
