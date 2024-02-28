import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ItemCategory } from '~/entities/extendable/items';
import { Button } from '~/shared/components/ui/button';
import { equipBlock, unequipBlock } from '~/widgets/blocks/store';
import { Details } from '~/widgets/blocks/ui/common/Details';

import { selectEquipment } from '../../store/equipment.selector';
import { EquipmentState, equipItem, unequipItem } from '../../store/equipment.slice';

interface EquipmentSlotProps {
  allowed?: keyof Pick<typeof ItemCategory, 'equipment'>;
  defaultIcon: string;
  name: keyof EquipmentState;
}

export const EquipmentSlot = React.memo(({ allowed, defaultIcon, name }: EquipmentSlotProps) => {
  const dispatch = useDispatch();
  const [id, Equipment] = useSelector(selectEquipment(name));

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.dropEffect = 'none';
    if (window.dragging?.category === allowed && window.dragging?.type === name) {
      e.dataTransfer.dropEffect = 'copy';
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const onEquip = (e: React.DragEvent<HTMLButtonElement>) => {
    const id = e.dataTransfer.getData('id');
    if (window.dragging?.category === allowed && name === window.dragging?.type) {
      dispatch(
        equipItem({
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
    if (Equipment) {
      dispatch(unequipBlock(id));
      dispatch(unequipItem(name));
    }
  };

  return Equipment ? (
    <Details block={Equipment} id={Equipment.id}>
      <Button
        className="relative text-3xl"
        onDoubleClick={onUnequip}
        onDragOver={onDragOver}
        onDrop={onEquip}
        rarity={Equipment.rarity}
        size="slot"
        title={name}
        variant="outline"
      >
        {Equipment.subicon && <span className="absolute right-1 top-1 text-xs leading-none">{Equipment.subicon}</span>}
        {Equipment.icon}
      </Button>
    </Details>
  ) : (
    <Button className="text-3xl" onDragOver={onDragOver} onDrop={onEquip} size="slot" title={name} variant="outline">
      <span className="opacity-20">{defaultIcon}</span>
    </Button>
  );
});
