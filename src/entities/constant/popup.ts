import { asPopups } from '../extendable/popups';

export const BASIC_POPUPS = asPopups({
  Inventory: {
    container_id: 'Inventory',
    h: 15,
    name: 'Inventory',
    w: 10,
  },
  Shop: {
    container_id: 'Shop',
    h: 7,
    name: 'Shop',
    w: 5,
  },
  Status: {
    container_id: 'Status',
    h: 1,
    name: 'Status',
    static: true,
    w: 10,
  },
});

export default BASIC_POPUPS;

export const POPUPS_WITHOUT_ITEM_ACTIVATION = [BASIC_POPUPS.Shop.container_id];
