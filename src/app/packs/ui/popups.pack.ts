import { PopupWithGrid } from '~/widgets/popups/ui/PopupWithGrid';

const POPUP_BLOCKS = {
  PopupWithGrid,
} as const;

export type PopupBlockType = typeof POPUP_BLOCKS;

export default POPUP_BLOCKS;
