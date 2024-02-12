export enum BlockTypes {
  UI,
  Item,
  Container,
  Popup,
}

export interface Block<Name extends string = string> {
  contain?: SerializedBlocks;
  height: number;
  name: Name;
  type: BlockTypes;
  width: number;
  x: number;
  y: number;
}

export type SerializedBlocks = Record<string, Block>;
