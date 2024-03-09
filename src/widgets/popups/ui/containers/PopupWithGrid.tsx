import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Block, changeBlockPosition } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { GridLayout } from '~/widgets/grid/ui/GridLayout';
import { DraggablePopup } from '~/widgets/popups/ui/components/DraggablePopup';

import { selectPopupById } from '../../store/popups.selector';

interface PopupWithGridProps {
  id: string;
  unskippable?: boolean;
}

export const PopupWithGrid = React.memo(
  ({ children, id, unskippable }: React.PropsWithChildren<PopupWithGridProps>) => {
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
      <DraggablePopup id={id} unskippable={unskippable}>
        <GridLayout cols={popup.w} id={popup.container_id} onItemDrop={onItemDrop} rows={popup.h}>
          <Render container_id={popup.container_id} />
        </GridLayout>
        {children}
      </DraggablePopup>
    );
  }
);

PopupWithGrid.displayName = 'PopupWithGrid';
