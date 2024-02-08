import React from "react";
import { useSelector } from "react-redux";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/shared/components/ui/hover-card";
import { Progress } from "~/shared/components/ui/progress";
import { RootState, START_HUNGER } from "~/app/store";
import { DraggableItem, DraggableItemProps } from "~/shared/basic";

export const HungerBar = React.memo((props: DraggableItemProps) => {
  const hunger = useSelector((state: RootState) => state.player.hunger);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="text-sm text-muted-foreground mr-2">HNG</p>
          <Progress
            indicatorClassName="bg-lime-700"
            value={hunger}
            max={START_HUNGER}
          />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {hunger} / {START_HUNGER}
      </HoverCardContent>
    </HoverCard>
  );
});

HungerBar.displayName = "HungerBar";
