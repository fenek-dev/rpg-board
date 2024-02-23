import { AccessibilityIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Gear } from '~/entities/extendable/gear';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { abbreviateAmount } from '~/shared/utils/number';
import { useGridItem } from '~/widgets/grid/hooks/useGridItem';

import { Block } from '../../../store';
import { Details } from '../../common/Details';
import { GearMenu } from './GearMenu';

export const GearItem = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const item = useSelector((state: RootState) => state.blocks.blocks[props.id!]) as Block<Gear>;
    const { onDragEnd, onDragStart, style } = useGridItem(item, props.id!);

    return (
      <GearMenu block={item} id={props.id!}>
        <Details block={item} id={props.id!}>
          <Button
            className="cursor-grab text-3xl transition-transform"
            draggable={true}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onMouseDown={(e) => e.stopPropagation()}
            rarity={item.rarity}
            ref={ref}
            style={style}
            unselectable="on"
            variant="outline"
            {...props}
          >
            {item.equipped && (
              <span className="absolute left-1 top-1 text-xs leading-none">
                <AccessibilityIcon className="text-green-900" />
              </span>
            )}
            {item.icon}
            {item.subicon && <span className="absolute right-1 top-1 text-xs leading-none">{item.subicon}</span>}
            {item.amount > 1 && (
              <span className="absolute bottom-1 right-1 text-xs leading-none">{abbreviateAmount(item.amount)}</span>
            )}
          </Button>
        </Details>
      </GearMenu>
    );
  })
);

GearItem.displayName = 'GearItem';
