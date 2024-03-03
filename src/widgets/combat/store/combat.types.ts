import { Attack } from '~/entities/extendable/attacks';
import { Entity, EntityBelongs } from '~/entities/extendable/entity';

export interface CombatEntity extends Entity {
  attacks: Attack[];
  belongs: EntityBelongs;
  nextAttack?: Attack;
}
