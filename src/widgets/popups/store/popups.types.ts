export interface PopupSizes {
  h: number;
  w: number;
}

export interface Popup extends PopupSizes {
  block_id: string;
  name: string;
  x: number;
  y: number;
}

export type SerializedPopups = Record<string, Popup>;
