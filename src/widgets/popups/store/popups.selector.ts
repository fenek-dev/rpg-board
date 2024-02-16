import { RootState } from '~/app/store';

export const selectPopupById = (id: string) => (state: RootState) => state.popups.popups[id];
