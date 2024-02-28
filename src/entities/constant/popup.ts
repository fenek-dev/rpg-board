import { asPopups } from '../extendable/popups';

export const BASIC_POPUPS = asPopups({
  Combat: {
    container_id: 'Combat',
    h: 0,
    name: 'Combat',
    w: 0,
  },
  Equipment: {
    container_id: 'Equipment',
    h: 3,
    name: 'Player',
    static: true,
    w: 3,
  },
  Inventory: {
    container_id: 'Inventory',
    h: 15,
    name: 'Inventory',
    w: 10,
  },
  Map: {
    container_id: 'Map',
    h: 0,
    name: 'Map',
    w: 0,
  },
  MapDetail: {
    closable: true,
    container_id: 'MapDetail',
    h: 0,
    name: 'Details',
    w: 0,
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
