import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { POPUPS_WITHOUT_ITEM_ACTIVATION } from '~/entities/constant/popup';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '~/shared/components/ui/context-menu';
import { selectPopupById } from '~/widgets/popups/store/popups.selector';

import { Block, removeBlock } from '../../../store';

interface ItemMenu {
  block: Block;
  id: string;
}

export const ContainerMenu = ({ block, children, id }: React.PropsWithChildren<ItemMenu>) => {
  const dispatch = useDispatch();
  const popup = useSelector(selectPopupById(block.belong));

  const disabled = POPUPS_WITHOUT_ITEM_ACTIVATION.includes(popup.container_id);

  const remove = () => {
    dispatch(removeBlock(id));
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
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
