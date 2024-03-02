export interface PopupSizes {
  h: number;
  w: number;
}

export interface Popup extends PopupSizes {
  container_id: string;
  name: string;
}

export const asPopups = <T>(et: { [K in keyof T]: Popup }) => et;
