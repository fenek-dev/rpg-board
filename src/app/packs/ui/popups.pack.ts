import { GearPopup } from '~/widgets/gear/ui/GearPopup';
import { PopupWithGrid } from '~/widgets/popups/ui/containers/PopupWithGrid';

const POPUP_BLOCKS = {
  GearPopup,
  PopupWithGrid,
} as const;

export type PopupBlockType = typeof POPUP_BLOCKS;

export default POPUP_BLOCKS;
