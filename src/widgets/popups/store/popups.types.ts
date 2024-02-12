export interface Popup {
  block_id: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export type SerializedPopups = Record<string, Popup>;
