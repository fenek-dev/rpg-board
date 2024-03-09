import { Attack } from '~/entities/extendable/attacks';
import { Entity, EntityBelongs } from '~/entities/extendable/entity';

export interface CombatEntity extends Entity {
  actions_left: number;
  attacks: Attack[];
  belongs: EntityBelongs;
  nextAttacks?: Attack[];
}

export type CombatTypes = 'boss' | 'combat' | 'elite';
