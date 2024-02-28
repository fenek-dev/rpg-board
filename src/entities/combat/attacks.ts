import { AttackTypes, asAttacks } from '../extendable/attacks';

export const ATTACKS = asAttacks({
  BasicAttack: {
    damage: 1,
    icon: '🗡️',
    name: 'Basic Attack',
    recharge_time: 1,
    type: AttackTypes.physical,
  },
  Fireball: {
    damage: 3,
    energy_cost: 2,
    icon: '🔥',
    name: 'Fireball',
    recharge_time: 3,
    type: AttackTypes.fire,
  },
  IceShard: {
    damage: 2,
    energy_cost: 1,
    icon: '❄️',
    name: 'Ice Shard',
    recharge_time: 2,
    type: AttackTypes.ice,
  },
  LightningBolt: {
    damage: 4,
    energy_cost: 3,
    icon: '⚡',
    name: 'Lightning Bolt',
    recharge_time: 4,
    type: AttackTypes.lightning,
  },
  WaterBlast: {
    damage: 2,
    energy_cost: 1,
    icon: '💧',
    name: 'Water Blast',
    recharge_time: 2,
    type: AttackTypes.water,
  },
  WindSlash: {
    damage: 3,
    energy_cost: 2,
    icon: '💨',
    name: 'Wind Slash',
    recharge_time: 3,
    type: AttackTypes.wind,
  },
});
