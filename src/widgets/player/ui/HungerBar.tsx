import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';
import { DraggableItem, DraggableItemProps } from '~/shared/draggable';

import { START_HUNGER } from '../store';

export const HungerBar = React.memo((props: DraggableItemProps) => {
  const hunger = useSelector((state: RootState) => state.player.hunger);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="mr-2 text-sm text-muted-foreground">HNG</p>
          <Progress indicatorClassName="bg-lime-700" max={START_HUNGER} value={hunger} />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {hunger} / {START_HUNGER}
      </HoverCardContent>
    </HoverCard>
  );
});

HungerBar.displayName = 'HungerBar';
