import { AccessibilityIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Equipment } from '~/entities/extendable/equipment';
import { Button, ButtonProps } from '~/shared/components/ui/button';
import { abbreviateAmount } from '~/shared/utils/number';
import { useGridItem } from '~/widgets/grid/hooks/useGridItem';

import { Block } from '../../../store';
import { EquipmentDetails } from './EquipmentDetails';
import { EquipmentMenu } from './EquipmentMenu';

export const EquipmentItem = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const item = useSelector((state: RootState) => state.blocks.blocks[props.id!]) as Block<Equipment>;
    const { onDragEnd, onDragStart, style } = useGridItem(item, props.id!);

    return (
      <EquipmentMenu block={item} id={props.id!}>
        <EquipmentDetails id={props.id!} item={item}>
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
        </EquipmentDetails>
      </EquipmentMenu>
    );
  })
);

EquipmentItem.displayName = 'EquipmentItem';
