import { Button } from '~/shared/components/ui/button';

import { CombatEntity } from '../../store/combat.types';
import { AttackDetails } from '../Attack/AttackDetails';

interface EntityIntentProps {
  entity: CombatEntity;
}

export const EntityIntent = ({ entity }: EntityIntentProps) => {
  if (entity.nextAttacks === undefined) return null;
  return (
    <div className="absolute -top-10 left-0 right-0 flex justify-center gap-2">
      {entity.nextAttacks.map((attack, i) => (
        <AttackDetails attack={attack} entity={entity} key={i}>
          <Button size="icon" variant="outline">
            {attack.icon}
          </Button>
        </AttackDetails>
      ))}
    </div>
  );
};
