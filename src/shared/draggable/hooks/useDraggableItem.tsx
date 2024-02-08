import { useDraggable, useDroppable } from '@dnd-kit/core';

import { BlockTypes } from '~/widgets/blocks/store';

export const useDraggableItem = (id: string = crypto.randomUUID()) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    data: {
      type: BlockTypes.Item,
    },
    id,
  });

  const { setNodeRef: nodeRef } = useDroppable({
    data: {
      type: BlockTypes.Item,
    },
    id,
  });

  return {
    attributes,
    listeners,
    nodeRef,
    setNodeRef,
    transform,
  };
};
