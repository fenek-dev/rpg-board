import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POPUPS_WITHOUT_ITEM_ACTIVATION } from '~/entities/constant/popup';
import { Equipment } from '~/entities/extendable/equipment';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '~/shared/components/ui/context-menu';
import { equipItem, unequipItem } from '~/widgets/equipment/store/equipment.slice';
import { selectPopupById } from '~/widgets/popups/store/popups.selector';

import { Block, equipBlock, removeBlock, unequipBlock } from '../../../store';

interface ItemMenu {
  block: Block<Equipment>;
  id: string;
}

export const EquipmentMenu = ({ block, children, id }: React.PropsWithChildren<ItemMenu>) => {
  const dispatch = useDispatch();
  const popup = useSelector(selectPopupById(block.belong));

  const disabled = POPUPS_WITHOUT_ITEM_ACTIVATION.includes(popup.container_id);

  const equip = () => {
    if (block.equipped) {
      dispatch(unequipItem(block.type));
      dispatch(unequipBlock(id));
    } else {
      dispatch(
        equipItem({
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
