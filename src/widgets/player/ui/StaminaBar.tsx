import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Progress } from '~/shared/components/ui/progress';

export const StaminaBar = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const stamina = useSelector((state: RootState) => state.player.stamina);
    const max_stamina = useSelector((state: RootState) => state.player.max_stamina);
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" {...props} ref={ref}>
            <p className="mr-2 text-sm text-muted-foreground">STM</p>
            <Progress indicatorClassName="bg-orange-400" max={max_stamina} value={stamina} />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="text-muted-foreground">
          {stamina} / {max_stamina}
        </HoverCardContent>
      </HoverCard>
    );
  })
);

StaminaBar.displayName = 'StaminaBar';
