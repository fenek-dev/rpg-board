import React from "react";
import { useSelector } from "react-redux";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/shared/components/ui/hover-card";
import { Progress } from "~/shared/components/ui/progress";
import { RootState, START_THIRSTY } from "~/app/store";
import { DraggableItem, DraggableItemProps } from "~/shared/basic";

export const ThirstyBar = React.memo((props: DraggableItemProps) => {
  const thirsty = useSelector((state: RootState) => state.player.thirsty);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="text-sm text-muted-foreground mr-2">TRS</p>
          <Progress
            indicatorClassName="bg-cyan-500"
            value={thirsty}
            max={START_THIRSTY}
          />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {thirsty} / {START_THIRSTY}
      </HoverCardContent>
    </HoverCard>
  );
});
