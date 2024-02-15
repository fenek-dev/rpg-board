import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { changeBlockPosition, selectBlocksBelongTo } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { DraggablePopup, DraggablePopupProps } from '~/widgets/popups/ui/DraggablePopup';

const GridLayout = WidthProvider(RGL);

export const PopupWithGrid = React.memo(({ id, popup }: DraggablePopupProps) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const blocks = useSelector(selectBlocksBelongTo(popup.container_id));

  if (!blocks) return null;

  return (
    <DraggablePopup id={id} popup={popup}>
      <Layout block_id={popup.container_id} height={popup.h} width={popup.w} />
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

  const blockPositionHandle = (_layout: RGL.Layout[], item: RGL.Layout) => {
    const block = window.dragging;

    if (!block || item.x >= width || item.y >= height || block.h > height || block.w > width || block.id === block_id)
      return;

    dispatch(
      changeBlockPosition({
        belong: block_id,
        id: block.id,
        x: item.x,
        y: item.y,
      })
    );
  };

  return (
    <GridLayout
      autoSize={false}
      className="z-10 h-full w-full"
      cols={width}
      compactType={null}
      isBounded
      isDraggable={false}
      isDroppable
      isResizable={false}
      margin={[0, 0]}
      maxRows={height}
      onDrop={blockPositionHandle}
      onDropDragOver={() => ({
        h: window.dragging?.h || 1,
        w: window.dragging?.w || 1,
      })}
      preventCollision
      rowHeight={gridSize}
      useCSSTransforms
      width={gridSize * width}
    >
      {...Render({ blocks })}
    </GridLayout>
  );
});
