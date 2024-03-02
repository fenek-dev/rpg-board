import { AttackTypes, asAttacks } from '../extendable/attacks';
import { EntityBelongs } from '../extendable/entity';

export const ATTACKS = asAttacks({
  BasicAttack: {
    base: 'attack',
    damage_multiplier: 1,
    icon: '🗡️',
    id: 'BasicAttack',
    name: 'Basic Attack',
    recharge_time: 1,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.physical,
  },
  Fireball: {
    base: 'attack',
    damage_multiplier: 1,
    energy_cost: 2,
    icon: '🔥',
    id: 'Fireball',
    name: 'Fireball',
    recharge_time: 3,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.fire,
  },
  IceShard: {
    base: 'attack',
    damage_multiplier: 1,
    energy_cost: 1,
    icon: '❄️',
    id: 'IceShard',
    name: 'Ice Shard',
    recharge_time: 2,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.ice,
  },
  LightningBolt: {
    base: 'attack',
    damage_multiplier: 1,
    energy_cost: 3,
    icon: '⚡',
    id: 'LightningBolt',
    name: 'Lightning Bolt',
    recharge_time: 4,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.lightning,
  },
  WaterBlast: {
    base: 'attack',
    damage_multiplier: 1,
    energy_cost: 1,
    icon: '💧',
    id: 'WaterBlast',
    name: 'Water Blast',
    recharge_time: 2,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.water,
  },
  WindSlash: {
    base: 'attack',
    damage_multiplier: 1,
    energy_cost: 2,
    icon: '💨',
    id: 'WindSlash',
    name: 'Wind Slash',
    recharge_time: 3,
    target: EntityBelongs.ENEMY,
    type: AttackTypes.wind,
  },
});
