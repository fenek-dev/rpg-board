import debounce from 'lodash-es/debounce';
import React from 'react';

import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { Block } from '~/widgets/blocks/store';

interface DetailsProps {
  block: Block;
}

export const Details = ({ block, children }: React.PropsWithChildren<DetailsProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isLeft = React.useRef(false);

  const debouncedSetIsOpen = debounce((value: boolean) => {
    if (!isLeft.current) {
      setIsOpen(value);
    }
  }, 700);

  const handleMouseEnter = () => {
    debouncedSetIsOpen(true);
    isLeft.current = false;
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    isLeft.current = true;
  };

  return (
    <HoverCard open={isOpen}>
      <HoverCardTrigger
        asChild
        onDragStart={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </HoverCardTrigger>
      {isOpen && (
        <HoverCardContent align="start" className="min-w-40 max-w-80" side="right">
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
            <Separator />
            <div className="flex justify-between p-1 text-xs text-muted-foreground">
              <span title="Weight">𐄷 {block.weight}g</span>
              <span title="Cost">© {block.cost}</span>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
