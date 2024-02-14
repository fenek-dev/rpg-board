import { BlockBase } from '~/widgets/blocks/store';
import { PopupBase } from '~/widgets/popups/store/popups.types';

export const asBlocks = <T>(et: { [K in keyof T]: BlockBase }) => et;

export const asPopups = <T>(et: { [K in keyof T]: PopupBase }) => et;
