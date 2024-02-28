import { Container } from '~/entities/extendable/containers';
import { Gear } from '~/entities/extendable/gear';
import { Item } from '~/entities/extendable/items';

export type Block<T = Container | Gear | Item> = T & {
  amount: number;
  belong: string;
  equipped?: boolean;
  exp: number;
  x: number;
  y: number;
};

export type SerializedBlocks = Record<string, Block>;
