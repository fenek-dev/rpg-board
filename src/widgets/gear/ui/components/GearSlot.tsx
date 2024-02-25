import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ItemCategory } from '~/entities/extendable/items';
import { Button } from '~/shared/components/ui/button';
import { equipBlock, unequipBlock } from '~/widgets/blocks/store';
import { Details } from '~/widgets/blocks/ui/common/Details';

import { selectGear } from '../../store/gear.selector';
import { GearState, equipGear, unequipGear } from '../../store/gear.slice';

interface GearSlotProps {
  allowed?: keyof Pick<typeof ItemCategory, 'gear'>;
  defaultIcon: string;
  name: keyof GearState;
}

export const GearSlot = React.memo(({ allowed, defaultIcon, name }: GearSlotProps) => {
  const dispatch = useDispatch();
  const [id, gear] = useSelector(selectGear(name));

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.dropEffect = 'none';
    if (window.dragging?.category === allowed) {
      e.dataTransfer.dropEffect = 'copy';
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const onEquip = (e: React.DragEvent<HTMLButtonElement>) => {
    const id = e.dataTransfer.getData('id');
    if (window.dragging?.category === allowed && name === window.dragging?.type) {
      dispatch(
        equipGear({
          id,
          name,
        })
      );
      dispatch(equipBlock(id));
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const onUnequip = () => {
    if (gear) {
      dispatch(unequipBlock(id));
      dispatch(unequipGear(name));
    }
  };

  return gear ? (
    <Details block={gear} id={gear.id}>
      <Button
        className="relative text-3xl"
        onDoubleClick={onUnequip}
        onDragOver={onDragOver}
        onDrop={onEquip}
        rarity={gear.rarity}
        size="slot"
        title={name}
        variant="outline"
      >
        {gear.subicon && <span className="absolute right-1 top-1 text-xs leading-none">{gear.subicon}</span>}
        {gear.icon}
      </Button>
    </Details>
  ) : (
    <Button className="text-3xl" onDragOver={onDragOver} onDrop={onEquip} size="slot" title={name} variant="outline">
      <span className="opacity-20">{defaultIcon}</span>
    </Button>
  );
});
