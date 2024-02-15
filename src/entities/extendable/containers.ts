import { PopupSizes } from '~/widgets/popups/store/popups.types';

import { Item } from './items';

export interface Container extends Omit<Item, 'type'> {
  category: 'container';
  popup: PopupSizes;
  type: 'container';
}

export const asContainers = <T>(et: { [K in keyof T]: Container }) => et;
