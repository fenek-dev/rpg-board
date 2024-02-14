import { asBlocks } from '~/shared/utils/item';

import CONTAINER_BLOCKS from '../ui/containers.pack';

export const CONTAINER_ITEMS = asBlocks({
  Moneybag: {
    h: 2,
    name: 'Moneybag',
    popup: {
      h: 5,
      w: 5,
    },
    type: CONTAINER_BLOCKS.BasicContainer.displayName!,
    w: 2,
  },
});

export default CONTAINER_ITEMS;
