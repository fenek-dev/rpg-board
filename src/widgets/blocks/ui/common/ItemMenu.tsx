import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { Block, putBlocksIntoOne, splitBlock } from '../../store';

interface ItemMenu {
  block: Block;
  id: string;
}

export const ItemMenu = ({ block, children, id }: React.PropsWithChildren<ItemMenu>) => {
  const dispatch = useDispatch();
  const popup = useSelector(selectPopupById(block.belong));

  const split = (amount: number) => () => {
    dispatch(
      splitBlock({
        amount,
        id,
        popup,
      })
    );
  };

  const putTogether = () => {
    dispatch(
      putBlocksIntoOne({
        id,
      })
    );
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Use</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger disabled={block.amount <= 1}>Split</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem onClick={split(Math.floor(block.amount / 2))}>In half</ContextMenuItem>
            <ContextMenuItem onClick={split(1)}>Just one</ContextMenuItem>
            <ContextMenuItem>Custom</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem onClick={putTogether}>Put together</ContextMenuItem>
        <ContextMenuItem className="text-red-500">Remove</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
