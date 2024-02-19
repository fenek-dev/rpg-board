export interface PopupSizes {
  h: number;
  w: number;
}

export interface PopupOptions {
  closable?: boolean;
  static?: boolean;
}

export interface Popup extends PopupSizes, PopupOptions {
  container_id: string;
  name: string;
}

export const asPopups = <T>(et: { [K in keyof T]: Popup }) => et;
