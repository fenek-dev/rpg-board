import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';

import { START_HUNGER } from '../store';

export const HungerBar = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const hunger = useSelector((state: RootState) => state.player.hunger);

    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" {...props} ref={ref}>
            <p className="mr-2 text-sm text-muted-foreground">HNG</p>
            <Progress indicatorClassName="bg-lime-700" max={START_HUNGER} value={hunger} />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-muted-foreground">
          {hunger} / {START_HUNGER}
        </HoverCardContent>
      </HoverCard>
    );
  })
);

HungerBar.displayName = 'HungerBar';
