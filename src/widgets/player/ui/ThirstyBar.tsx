import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';
import { DraggableItem, DraggableItemProps } from '~/shared/draggable';

import { START_THIRSTY } from '../store';

export const ThirstyBar = React.memo((props: DraggableItemProps) => {
  const thirsty = useSelector((state: RootState) => state.player.thirsty);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="mr-2 text-sm text-muted-foreground">TRS</p>
          <Progress indicatorClassName="bg-cyan-500" max={START_THIRSTY} value={thirsty} />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {thirsty} / {START_THIRSTY}
      </HoverCardContent>
    </HoverCard>
  );
});
