import { BlockTypes } from '~/entities/items/enum';

export interface Block<Name extends string = string> {
  belong: string;
  h: number;
  name: Name;
  type: keyof typeof BlockTypes;
  w: number;
  x: number;
  y: number;
}

export type SerializedBlocks = Record<string, Block>;
