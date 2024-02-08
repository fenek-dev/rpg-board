import React from 'react';
import { useSelector } from 'react-redux';

import { Popup } from '~/app/contexts/Popups.context';
import { DndBoard } from '~/app/providers/DndBoard';
import { RootState } from '~/app/store';
import { DraggablePopup, DraggablePopupProps } from '~/shared/draggable/ui/DraggablePopup';

import { selectNestedBlock } from '../store';
import { Render } from './Render';

export const ContainerPopup = React.memo(({ id, popup }: DraggablePopupProps & { popup: Popup }) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const block = useSelector(selectNestedBlock(id));

  if (!block) return null;

  return (
    <DraggablePopup id={id} popup={popup}>
      <DndBoard>
        <Render blocks={block.contain || {}} gridSize={gridSize} parentId={id} />
      </DndBoard>
    </DraggablePopup>
  );
});

ContainerPopup.displayName = 'ContainerPopup';
