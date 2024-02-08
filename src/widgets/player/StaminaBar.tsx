import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { DraggableItem, DraggableItemProps } from '~/shared/basic';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';

export const StaminaBar = React.memo((props: DraggableItemProps) => {
  const stamina = useSelector((state: RootState) => state.player.stamina);
  const max_stamina = useSelector(
    (state: RootState) => state.player.max_stamina,
  );
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="text-sm text-muted-foreground mr-2">STM</p>
          <Progress
            indicatorClassName="bg-orange-400"
            max={max_stamina}
            value={stamina}
          />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {stamina} / {max_stamina}
      </HoverCardContent>
    </HoverCard>
  );
});

StaminaBar.displayName = 'StaminaBar';
