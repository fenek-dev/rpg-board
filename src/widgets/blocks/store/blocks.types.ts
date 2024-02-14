import { PopupSizes } from '~/widgets/popups/store/popups.types';

export interface BlockBase {
  h: number;
  name: string;
  popup?: PopupSizes;
  type: string;
  w: number;
}

export interface Block extends BlockBase {
  belong: string;
  x: number;
  y: number;
}

export interface BlockWithId extends Block {
  id: string;
}

export type SerializedBlocks = Record<string, Block>;
