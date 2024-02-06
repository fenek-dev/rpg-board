import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "~/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Progress } from "~/components/ui/progress";
import { RootState, START_HUNGER } from "~/setup/store";
import { DraggableItem, DraggableItemProps } from "~/shared/basic";

export const HungerBar = React.memo((props: DraggableItemProps) => {
  console.log(props);

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
