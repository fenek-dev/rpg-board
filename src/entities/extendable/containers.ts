import { Item, ItemCategory } from './items';
import { PopupOptions, PopupSizes } from './popups';

export interface Container extends Omit<Item, 'stackable' | 'type'> {
  accept: 'all' | keyof typeof ItemCategory;
  category: 'container';
  popup: PopupSizes & PopupOptions;
  type: 'container';
}

export const asContainers = <T>(et: { [K in keyof T]: Container }) => et;
