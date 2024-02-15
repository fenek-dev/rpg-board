import { Item } from './items';
import { PopupOptions, PopupSizes } from './popups';

export interface Container extends Omit<Item, 'type'> {
  category: 'container';
  popup: PopupSizes & PopupOptions;
  type: 'container';
}

export const asContainers = <T>(et: { [K in keyof T]: Container }) => et;
