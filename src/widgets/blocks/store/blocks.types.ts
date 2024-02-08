import UI_BLOCKS from '~/app/packs/ui/blocks.pack';

export interface Block {
  children?: Block[];
  height: number;
  name: keyof typeof UI_BLOCKS;
  width: number;
  x: number;
  y: number;
}

export type SerializedBlocks = Record<string, Block>;
