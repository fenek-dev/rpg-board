import React from 'react';

import { Loot } from '~/entities/extendable/loot';
import { ITEMS } from '~/entities/items';
import { Button } from '~/shared/components/ui/button';
import { getColorFromChance } from '~/shared/utils/color';

interface LootItemProps {
  loot: Loot;
}

export const LootItem = React.memo(
  React.forwardRef<HTMLButtonElement, LootItemProps>(({ loot }, ref) => {
    const item = ITEMS[loot.id];

    return (
      <div className="flex flex-col items-center justify-center">
        <Button
          className="relative text-3xl transition-transform"
          onMouseDown={(e) => e.stopPropagation()}
          rarity={item.rarity}
          ref={ref}
          size="slot"
          unselectable="on"
          variant="outline"
        >
          {item.icon}
          {item.subicon && <span className="absolute right-0 top-1 text-xs leading-none">{item.subicon}</span>}
          <span className="absolute bottom-1 right-0 text-xs leading-none">
            {loot.amount[0]}-{loot.amount[1]}
          </span>
        </Button>
        <span className="text-center text-xs leading-none" style={{ color: getColorFromChance(loot.chance) }}>
          {loot.chance}%
        </span>
      </div>
    );
  })
);

LootItem.displayName = 'LootItem';
