import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';

import { START_THIRSTY } from '../store';

export const ThirstyBar = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const thirsty = useSelector((state: RootState) => state.player.thirsty);

    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" {...props} ref={ref}>
            <p className="mr-2 text-sm text-muted-foreground">TRS</p>
            <Progress indicatorClassName="bg-cyan-500" max={START_THIRSTY} value={thirsty} />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-muted-foreground">
          {thirsty} / {START_THIRSTY}
        </HoverCardContent>
      </HoverCard>
    );
  })
);

ThirstyBar.displayName = 'ThirstyBar';
