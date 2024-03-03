import React from 'react';

import { Entity } from '~/entities/extendable/entity';
import { Button } from '~/shared/components/ui/button';

import { CombatEntity } from '../../store/combat.types';
import { AttackDetails } from '../Attack/AttackDetails';

interface EntityIntentProps {
  entity: CombatEntity;
}

export const EntityIntent = ({ entity }: EntityIntentProps) => {
  if (entity.nextAttack === undefined) return null;
  return (
    <AttackDetails attack={entity.nextAttack} entity={entity}>
      <Button className="absolute -top-10 left-1/2 right-1/2 -translate-x-1/2" size="icon" variant="outline">
        {entity.nextAttack.icon}
      </Button>
    </AttackDetails>
  );
};
