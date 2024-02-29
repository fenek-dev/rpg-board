import debounce from 'lodash-es/debounce';
import React from 'react';

import { Equipment } from '~/entities/extendable/equipment';
import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { Block } from '~/widgets/blocks/store';

interface DetailsProps {
  id: string;
  item: Block<Equipment>;
}

export const EquipmentDetails = ({ children, id, item }: React.PropsWithChildren<DetailsProps>) => {
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
        <HoverCardContent align="start" className="z-50 min-w-40 max-w-80" side="right">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <Separator />
            <div className="mt-4 flex gap-0.5">
              <Badge className="" variant="outline">
                {item.category}
              </Badge>
              <Badge className="" rarity={item.rarity} variant="outline">
                {item.rarity}
              </Badge>
            </div>
            {item.attacks && (
              <>
                <Separator />
                <h4 className="text-base text-muted-foreground">Attacks</h4>
                {item.attacks.map((attack) => (
                  <h5 className="text-sm font-bold">
                    {attack.icon} {attack.name} ({attack.damage_multiplier} {attack.type})
                  </h5>
                ))}
              </>
            )}
            <Separator />
            <div className="flex justify-between p-1 text-xs text-muted-foreground">
              <span title="Cost">🪙 {item.cost}</span>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
