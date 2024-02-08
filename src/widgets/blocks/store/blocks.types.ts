export enum BlockTypes {
  UI,
  Item,
  Container,
}

export interface Block<Name extends string = string> {
  children?: string[];
  height: number;
  name: Name;
  parent?: string;
  type: BlockTypes;
  width: number;
  x: number;
  y: number;
}

export type SerializedBlocks = Record<string, Block>;
