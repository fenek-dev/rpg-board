export enum BlockTypes {
  UI,
  Item,
  Container,
  Popup,
}

export interface Block<Name extends string = string> {
  belong: string;
  h: number;
  name: Name;
  type: BlockTypes;
  w: number;
  x: number;
  y: number;
}

export type SerializedBlocks = Record<string, Block>;
