import React from "react";
import { useSelector } from "react-redux";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/shared/components/ui/hover-card";
import { Progress } from "~/shared/components/ui/progress";
import { RootState } from "~/app/store";
import { DraggableItem, DraggableItemProps } from "~/shared/basic";

export const HpBar = React.memo((props: DraggableItemProps) => {
  const hp = useSelector((state: RootState) => state.player.hp);
  const max_hp = useSelector((state: RootState) => state.player.max_hp);
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DraggableItem {...props}>
          <p className="text-sm text-muted-foreground mr-2">HP</p>
          <Progress indicatorClassName="bg-rose-800" value={hp} max={max_hp} />
        </DraggableItem>
      </HoverCardTrigger>
      <HoverCardContent className="text-muted-foreground">
        {hp} / {max_hp}
      </HoverCardContent>
    </HoverCard>
  );
});

HpBar.displayName = "HpBar";
