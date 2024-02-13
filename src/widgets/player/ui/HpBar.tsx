import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';

export const HpBar = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const hp = useSelector((state: RootState) => state.player.hp);
    const max_hp = useSelector((state: RootState) => state.player.max_hp);
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" {...props} ref={ref}>
            <p className="mr-2 text-sm text-muted-foreground">HP</p>
            <Progress indicatorClassName="bg-rose-800" max={max_hp} value={hp} />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-muted-foreground">
          {hp} / {max_hp}
        </HoverCardContent>
      </HoverCard>
    );
  })
);

HpBar.displayName = 'HpBar';
