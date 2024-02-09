import { DraggableContainer } from '~/shared/draggable/ui/DraggableContainer';

const CONTAINER_BLOCKS = {
  DraggableContainer,
} as const;

export type ContainerBlockType = typeof CONTAINER_BLOCKS;

export default CONTAINER_BLOCKS;
