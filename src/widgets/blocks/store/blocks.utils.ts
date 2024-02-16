import { Block } from '.';

export const isAcceptableForThisContainer = (container: Block, item: Block) =>
  container && 'accept' in container && (container.accept === 'all' || container.accept !== item.category);

export const isNotContainerIntoContainer = (container: Block, item: Block) =>
  container && item && container.type === 'container' && item.type === 'container';
