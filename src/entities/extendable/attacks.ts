export enum AttackTypes {
  earth = 'earth',
  fire = 'fire',
  ice = 'ice',
  lightning = 'lightning',
  physical = 'physical',
  water = 'water',
  wind = 'wind',
}

export interface Attack {
  damage: number;
  energy_cost?: number;
  icon: string;
  id: string;
  name: string;
  recharge_time: number;
  target: 'enemy' | 'self';
  type: AttackTypes;
}

export const asAttacks = <T>(et: { [K in keyof T]: Attack }) => et;
