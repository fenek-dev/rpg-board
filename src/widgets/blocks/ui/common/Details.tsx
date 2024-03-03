import debounce from 'lodash-es/debounce';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { Block, selectCostInContainer } from '~/widgets/blocks/store';

interface DetailsProps {
  block: Block;
  id: string;
}

export const Details = ({ block, children, id }: React.PropsWithChildren<DetailsProps>) => {
  const [isDragging, setIsDragging] = useState(false);
  const insideCost = useSelector(selectCostInContainer(id, block.type === 'container'));

  return (
    <HoverCard>
      <HoverCardTrigger asChild onDragEnd={() => setIsDragging(false)} onDragStart={() => setIsDragging(true)}>
        {children}
      </HoverCardTrigger>
      {!isDragging && (
        <HoverCardContent align="start" className="z-50 min-w-40 max-w-80" side="right">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">{block.name}</h4>
            <p className="text-sm text-muted-foreground">{block.description}</p>
            <Separator />
            <div className="mt-4 flex gap-0.5">
              <Badge className="" variant="outline">
                {block.category}
              </Badge>
              <Badge className="" rarity={block.rarity} variant="outline">
                {block.rarity}
              </Badge>
            </div>
            {'effects' in block && block.effects && (
              <>
                <Separator />
                <h4 className="text-base text-muted-foreground">On use:</h4>
                {block.effects.map((eff) => (
                  <h5 className="text-sm font-bold text-green-600/50" key={eff.id}>
                    {eff.icon} {eff.name} ({eff.amount})
                  </h5>
                ))}
              </>
            )}
            <Separator />
            <div className="flex justify-between p-1 text-xs text-muted-foreground">
              <span title="Amount">🧮 {block.amount}</span>
              <Separator orientation="vertical" />
              <span title="Cost">🪙 {block.cost * block.amount + insideCost}</span>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
