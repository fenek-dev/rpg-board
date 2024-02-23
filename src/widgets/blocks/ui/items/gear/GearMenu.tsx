import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POPUPS_WITHOUT_ITEM_ACTIVATION } from '~/entities/constant/popup';
import { Gear } from '~/entities/extendable/gear';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '~/shared/components/ui/context-menu';
import { equipGear, unequipGear } from '~/widgets/gear/store/gear.slice';
import { selectPopupById } from '~/widgets/popups/store/popups.selector';

import { Block, equipBlock, removeBlock, unequipBlock } from '../../../store';

interface ItemMenu {
  block: Block<Gear>;
  id: string;
}

export const GearMenu = ({ block, children, id }: React.PropsWithChildren<ItemMenu>) => {
  const dispatch = useDispatch();
  const popup = useSelector(selectPopupById(block.belong));

  const disabled = POPUPS_WITHOUT_ITEM_ACTIVATION.includes(popup.container_id);

  const equip = () => {
    if (block.equipped) {
      dispatch(unequipGear(block.type));
      dispatch(unequipBlock(id));
    } else {
      dispatch(
        equipGear({
          id,
          name: block.type,
        })
      );
      dispatch(equipBlock(id));
    }
  };

  const remove = () => {
    dispatch(removeBlock(id));
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger onDoubleClick={disabled ? undefined : equip}>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem disabled={disabled} onClick={equip}>
          {block.equipped ? 'Unequip' : 'Equip'}
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="text-red-500" disabled={disabled}>
            Remove
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem className="text-red-500" disabled={disabled} onClick={remove}>
              Confirm
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
};
