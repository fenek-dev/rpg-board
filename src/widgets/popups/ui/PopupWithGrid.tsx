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
      <Layout block_id={popup.block_id} height={popup.height} width={popup.width} />
      <Grid size={gridSize} />
    </DraggablePopup>
  );
});

PopupWithGrid.displayName = 'PopupWithGrid';

interface LayoutProps {
  block_id: string;
  height: number;
  width: number;
}
const Layout = React.memo(({ block_id, height, width }: LayoutProps) => {
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
      cols={width}
      compactType={null}
      margin={[0, 0]}
      maxRows={height}
      onDrag={(_a, _b, _c, _d, e) => e.stopPropagation()}
      onDragStart={(_a, _b, _c, _d, e) => e.stopPropagation()}
      onDragStop={blockPositionHandle}
      preventCollision
      rowHeight={gridSize}
      useCSSTransforms
      width={gridSize * width}
    >
      {...Render({ blocks })}
    </GridLayout>
  );
});
