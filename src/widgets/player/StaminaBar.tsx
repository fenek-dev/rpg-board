import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "~/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Progress } from "~/components/ui/progress";
import { RootState } from "~/setup/store";
import { DraggableItem, DraggableItemProps } from "~/shared/basic";

export const StaminaBar = (props: DraggableItemProps) => {
  const stamina = useSelector((state: RootState) => state.player.stamina);
  const max_stamina = useSelector(
    (state: RootState) => state.player.max_stamina
  );
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="text-sm text-muted-foreground mr-2">STM</p>
          <Progress
            indicatorClassName="bg-orange-400"
            value={stamina}
            max={max_stamina}
          />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {stamina} / {max_stamina}
      </HoverCardContent>
    </HoverCard>
  );
};
