import React from 'react';

import { Loot } from '~/entities/extendable/loot';
import { ITEMS } from '~/entities/items';
import { Button } from '~/shared/components/ui/button';
import { getColorFromChance } from '~/shared/utils/color';

import { LootDetails } from './LootDetails';

interface LootItemProps {
  loot: Loot;
}

export const LootItem = React.memo(
  React.forwardRef<HTMLButtonElement, LootItemProps>(({ loot }, ref) => {
    const item = ITEMS[loot.id];

    return (
      <LootDetails loot={loot}>
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
            {item.subicon && <span className="absolute right-1 top-1 text-xs leading-none">{item.subicon}</span>}
            <span className="absolute bottom-1 right-1 text-xs leading-none">
              {typeof loot.amount === 'number' ? loot.amount : `${loot.amount[0]}-${loot.amount[1]}`}
            </span>
          </Button>
          <span className="text-center text-xs leading-none" style={{ color: getColorFromChance(loot.chance) }}>
            {loot.chance}%
          </span>
        </div>
      </LootDetails>
    );
  })
);

LootItem.displayName = 'LootItem';
