import { Popup } from '~/entities/extendable/popups';

export interface PopupData extends Popup {
  isCollapsed: boolean;
  x: number;
  y: number;
}

export type SerializedPopups = Record<string, PopupData>;
