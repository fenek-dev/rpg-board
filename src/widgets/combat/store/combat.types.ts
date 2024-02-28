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
  name: string;
  recharge_time: number;
  type: AttackTypes;
}
