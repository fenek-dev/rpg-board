import { Popup } from '~/entities/extendable/popups';

export interface PopupData extends Popup {
  x: number;
  y: number;
}

export type SerializedPopups = Record<string, PopupData>;
