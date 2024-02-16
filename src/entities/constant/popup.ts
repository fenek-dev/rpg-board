import { asPopups } from '../extendable/popups';

export const BASIC_POPUPS = asPopups({
  Gear: {
    container_id: 'Gear',
    h: 7,
    name: 'Player gear',
    w: 5,
  },
  Inventory: {
    container_id: 'Inventory',
    h: 12,
    name: 'Inventory',
    w: 8,
  },
  Merchant: {
    container_id: 'Merchant',
    h: 10,
    name: 'Merchant',
    w: 10,
  },
});

export default BASIC_POPUPS;
