import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Block, changeBlockPosition } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { GridLayout } from '~/widgets/grid/ui/GridLayout';
import { DraggablePopup } from '~/widgets/popups/ui/DraggablePopup';

import { selectPopupById } from '../store/popups.selector';

export const PopupWithGrid = React.memo(({ id }: { id: string }) => {
  const popup = useSelector(selectPopupById(id));

  const dispatch = useDispatch();

  const onItemDrop = (x: number, y: number, _item: Block, id: string, belong: string) => {
    dispatch(
      changeBlockPosition({
        belong,
        id,
        x,
        y,
      })
    );
  };

  return (
    <DraggablePopup id={id} popup={popup}>
      <GridLayout cols={popup.w} id={popup.container_id} onItemDrop={onItemDrop} rows={popup.h}>
        <Render container_id={popup.container_id} />
      </GridLayout>
    </DraggablePopup>
  );
});

PopupWithGrid.displayName = 'PopupWithGrid';
