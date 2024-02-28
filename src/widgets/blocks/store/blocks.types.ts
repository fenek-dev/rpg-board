import { Container } from '~/entities/extendable/containers';
import { Equipment } from '~/entities/extendable/equipment';
import { Item } from '~/entities/extendable/items';

export type Block<T = Container | Equipment | Item> = T & {
  amount: number;
  belong: string;
  equipped?: boolean;
  exp: number;
  x: number;
  y: number;
};

export type SerializedBlocks = Record<string, Block>;
