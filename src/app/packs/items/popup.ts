import { asBlocks, asPopups } from '~/shared/utils/item';

export const BASIC_POPUPS = asPopups({
  Gear: {
    block_id: 'Gear',
    h: 7,
    name: 'Player gear',
    w: 5,
  },
  Inventory: {
    block_id: 'Inventory',
    h: 20,
    name: 'Inventory',
    w: 16,
  },
  Merchant: {
    block_id: 'Merchant',
    h: 10,
    name: 'Merchant',
    w: 10,
  },
});

export default BASIC_POPUPS;
