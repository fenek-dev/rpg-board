import { Attack } from '~/entities/extendable/attacks';
import { Entity, EntityBelongs } from '~/entities/extendable/entity';

export interface CombatEntity extends Entity {
  belongs: EntityBelongs;
}

export interface CombatAttack extends Attack {
  target: EntityBelongs;
}
