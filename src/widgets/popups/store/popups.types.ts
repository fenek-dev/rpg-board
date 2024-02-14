export interface PopupSizes {
  h: number;
  w: number;
}

export interface PopupBase extends PopupSizes {
  block_id: string;
  name: string;
}

export interface Popup extends PopupBase {
  x: number;
  y: number;
}

export type SerializedPopups = Record<string, Popup>;
