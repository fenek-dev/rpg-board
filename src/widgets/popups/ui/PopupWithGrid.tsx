import React from 'react';
import RGL, { ItemCallback, WidthProvider } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { changeBlockPosition, selectBlocksBelongTo } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { DraggablePopup, DraggablePopupProps } from '~/widgets/popups/ui/DraggablePopup';

const GridLayout = WidthProvider(RGL);

export const PopupWithGrid = React.memo(({ id, popup }: DraggablePopupProps) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const blocks = useSelector(selectBlocksBelongTo(popup.block_id));

  if (!blocks) return null;

  return (
    <DraggablePopup id={id} popup={popup}>
      <Layout block_id={popup.block_id} />
      <Grid size={gridSize} />
    </DraggablePopup>
  );
});

PopupWithGrid.displayName = 'PopupWithGrid';

interface LayoutProps {
  block_id: string;
}
const Layout = React.memo(({ block_id }: LayoutProps) => {
  const dispatch = useDispatch();

  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const blocks = useSelector(selectBlocksBelongTo(block_id));

  const blockPositionHandle: ItemCallback = (_a, _b, newItem, _d, e) => {
    e.stopPropagation();
    dispatch(
      changeBlockPosition({
        id: newItem.i,
        x: newItem.x,
        y: newItem.y,
      })
    );
  };

  return (
    <GridLayout
      autoSize={false}
      cols={32}
      compactType={null}
      margin={[0, 0]}
      maxRows={20}
      onDrag={(_a, _b, _c, _d, e) => e.stopPropagation()}
      onDragStart={(_a, _b, _c, _d, e) => e.stopPropagation()}
      onDragStop={blockPositionHandle}
      preventCollision
      rowHeight={gridSize}
      useCSSTransforms
      width={gridSize * 32}
    >
      {...Render({ blocks })}
    </GridLayout>
  );
});
