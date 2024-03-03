import debounce from 'lodash-es/debounce';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Attack } from '~/entities/extendable/attacks';
import { EMPTY_ENTITY } from '~/entities/extendable/entity';
import { Equipment } from '~/entities/extendable/equipment';
import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { calculateDamage } from '~/shared/utils/damage';
import { Block } from '~/widgets/blocks/store';

import { selectCurrentEntity } from '../../store/combat.selectors';

interface DetailsProps {
  attack: Attack;
}

export const AttackDetails = ({ attack, children }: React.PropsWithChildren<DetailsProps>) => {
  const [isDragging, setIsDragging] = useState(false);
  const { entity } = useSelector(selectCurrentEntity);

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
