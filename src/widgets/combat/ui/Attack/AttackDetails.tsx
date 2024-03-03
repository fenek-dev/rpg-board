import debounce from 'lodash-es/debounce';
import React, { useState } from 'react';

import { Attack } from '~/entities/extendable/attacks';
import { Equipment } from '~/entities/extendable/equipment';
import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { Block } from '~/widgets/blocks/store';

interface DetailsProps {
  attack: Attack;
}

export const AttackDetails = ({ attack, children }: React.PropsWithChildren<DetailsProps>) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild onDragEnd={() => setIsDragging(false)} onDragStart={() => setIsDragging(true)}>
        {children}
      </HoverCardTrigger>
      {!isDragging && (
        <HoverCardContent align="start" className="z-50 min-w-40 max-w-80" side="right">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">{attack.name}</h4>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
