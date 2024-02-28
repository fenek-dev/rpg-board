import debounce from 'lodash-es/debounce';
import React from 'react';

import { Loot } from '~/entities/extendable/loot';
import { ITEMS } from '~/entities/items';
import { Badge } from '~/shared/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/shared/components/ui/hover-card';
import { Separator } from '~/shared/components/ui/separator';
import { getMinMaxFromDices } from '~/shared/utils/dices';

interface LootDetailsProps {
  loot: Loot;
}

export const LootDetails = ({ children, loot }: React.PropsWithChildren<LootDetailsProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isLeft = React.useRef(false);

  const item = ITEMS[loot.id];

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
            {'effects' in item && item.effects && (
              <>
                <Separator />
                <h4 className="text-lg text-muted-foreground">Effects</h4>
                {item.effects.map((eff) => (
                  <div className="rounded-md border border-input p-1" key={eff.id}>
                    <h5 className="text-sm">
                      <span className="text-xl">{eff.icon}</span> {eff.name} (
                      {getMinMaxFromDices(eff.dices).join(' - ')})
                    </h5>
                    <p className="text-xs text-muted-foreground">{eff.description}</p>
                  </div>
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
