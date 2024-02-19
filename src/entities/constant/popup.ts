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
  Status: {
    container_id: 'Status',
    h: 1,
    name: 'Status',
    static: true,
    w: 10,
  },
});

export default BASIC_POPUPS;
