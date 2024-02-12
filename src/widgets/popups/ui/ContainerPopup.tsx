import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { selectNestedBlock } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { DraggablePopup, DraggablePopupProps } from '~/widgets/popups/ui/DraggablePopup';

export const ContainerPopup = React.memo(({ id, popup }: DraggablePopupProps) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const block = useSelector(selectNestedBlock(popup.block_id));

  if (!block) return null;

  return (
    <DraggablePopup id={id} popup={popup}>
      <Render blocks={block.contain || {}} gridSize={gridSize} parentId={popup.block_id} />
      <Grid size={gridSize} />
    </DraggablePopup>
  );
});

ContainerPopup.displayName = 'ContainerPopup';
