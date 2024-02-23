import { Container } from '~/entities/extendable/containers';
import { Item } from '~/entities/extendable/items';
import { Weapon } from '~/entities/extendable/weapon';

export type Block<T = Container | Item | Weapon> = T & {
  amount: number;
  belong: string;
  equipped?: boolean;
  x: number;
  y: number;
};

export type SerializedBlocks = Record<string, Block>;
