import React, { useState } from 'react';

import { Attack } from '~/entities/extendable/attacks';
import { EMPTY_ENTITY, Entity } from '~/entities/extendable/entity';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { calculateDamage } from '~/shared/utils/damage';

interface DetailsProps {
  attack: Attack;
  entity: Entity;
}

export const AttackDetails = ({ attack, children, entity }: React.PropsWithChildren<DetailsProps>) => {
  const [isDragging, setIsDragging] = useState(false);

  const approxDmg = calculateDamage(attack, EMPTY_ENTITY, entity);

  return (
    <HoverCard>
      <HoverCardTrigger asChild onDragEnd={() => setIsDragging(false)} onDragStart={() => setIsDragging(true)}>
        {children}
      </HoverCardTrigger>
      {!isDragging && (
        <HoverCardContent align="end" className="z-50 min-w-40 max-w-80" side="right">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">{attack.name}</h4>
            <Separator />
            <p className="text-lg font-semibold">
              Approx. dmg: {approxDmg} {attack.type}
            </p>
            <p className="text-sm text-muted-foreground">Scales with: {attack.base}</p>
            <Separator />
            <p className="text-sm text-muted-foreground">Multiplier: {attack.damage_multiplier}x</p>
            <p className="text-sm text-muted-foreground">Energy cost: {attack.energy_cost || 0}</p>
            <p className="text-sm text-muted-foreground">Cooldown: {attack.cooldown} turns</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
