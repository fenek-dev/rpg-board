import { Container } from '~/entities/extendable/containers';
import { Item } from '~/entities/extendable/items';

export type Block<T = Container | Item> = T & {
  amount: number;
  belong: string;
  x: number;
  y: number;
};

export type SerializedBlocks = Record<string, Block>;
