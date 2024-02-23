import { useDispatch, useSelector } from 'react-redux';

import { ItemCategory } from '~/entities/extendable/items';
import { Button } from '~/shared/components/ui/button';
import { Block } from '~/widgets/blocks/store';
import { Details } from '~/widgets/blocks/ui/common/Details';

import { selectGear } from '../../store/gear.selector';
import { GearState, equipGear } from '../../store/gear.slice';

interface GearSlotProps {
  allowed?: keyof Pick<typeof ItemCategory, 'weapon'>;
  defaultIcon: string;
  name: keyof GearState;
}

export const GearSlot = ({ allowed, defaultIcon, name }: GearSlotProps) => {
  const dispatch = useDispatch();
  const gear = useSelector(selectGear(name));

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.dropEffect = 'none';
    if (window.dragging?.category === allowed) {
      e.dataTransfer.dropEffect = 'copy';
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    const block = JSON.parse(e.dataTransfer.getData('block')) as Block;
    if (window.dragging?.category === allowed) {
      dispatch(
        equipGear({
          key: name,
          ...block,
        })
      );
    }
    e.preventDefault();
    e.stopPropagation();
  };

  return gear ? (
    <Details block={gear} id={gear.id}>
      <Button
        className="text-3xl"
        onDragOver={onDragOver}
        onDrop={onDrop}
        rarity={gear.rarity}
        size="slot"
        title={name}
        variant="outline"
      >
        {gear.icon}
      </Button>
    </Details>
  ) : (
    <Button className="text-3xl" onDragOver={onDragOver} onDrop={onDrop} size="slot" title={name} variant="outline">
      <span className="opacity-20">{defaultIcon}</span>
    </Button>
  );
};
