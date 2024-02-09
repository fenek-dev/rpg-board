import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';
import { DraggableItem, DraggableItemProps } from '~/shared/draggable';

export const HpBar = React.memo((props: DraggableItemProps) => {
  const hp = useSelector((state: RootState) => state.player.hp);
  const max_hp = useSelector((state: RootState) => state.player.max_hp);
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="mr-2 text-sm text-muted-foreground">HP</p>
          <Progress indicatorClassName="bg-rose-800" max={max_hp} value={hp} />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {hp} / {max_hp}
      </HoverCardContent>
    </HoverCard>
  );
});

HpBar.displayName = 'HpBar';
