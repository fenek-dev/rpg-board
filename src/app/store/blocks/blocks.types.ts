import { UI_BLOCKS } from "~/app/enum/blocks";

export interface Block {
  name: keyof typeof UI_BLOCKS;
  x: number;
  y: number;
  width: number;
  height: number;
  children?: Block[];
}

export type SerializedBlocks = Record<string, Block>;
