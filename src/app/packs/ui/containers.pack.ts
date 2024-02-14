import { BasicContainer } from '~/widgets/blocks/ui/containers/BasicContainer';

const CONTAINER_BLOCKS = {
  BasicContainer,
} as const;

export type ContainerBlockType = typeof CONTAINER_BLOCKS;

export default CONTAINER_BLOCKS;
