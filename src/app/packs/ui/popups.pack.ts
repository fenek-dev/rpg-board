import { ContainerPopup } from '~/widgets/popups/ui/ContainerPopup';

const POPUP_BLOCKS = {
  ContainerPopup,
} as const;

export type PopupBlockType = typeof POPUP_BLOCKS;

export default POPUP_BLOCKS;
