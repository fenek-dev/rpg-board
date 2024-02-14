import { BlockBase } from '~/widgets/blocks/store';

export const asBlocks = <T>(et: { [K in keyof T]: BlockBase }) => et;
