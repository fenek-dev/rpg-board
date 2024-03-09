import { Item, ItemCategory } from './items';
import { PopupSizes } from './popups';

export interface Container extends Omit<Item, 'effects' | 'stackable' | 'type'> {
  accept: 'all' | keyof typeof ItemCategory;
  category: 'container';
  popup: PopupSizes;
  type: 'container';
}

export const asContainers = <T>(et: { [K in keyof T]: Container }) => et;
