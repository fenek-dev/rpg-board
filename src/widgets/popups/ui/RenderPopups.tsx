import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { PopupWithGrid } from './PopupWithGrid';

export const RenderPopups = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);

  return Object.entries(popups).map(([id, popup]) => <PopupWithGrid id={id} key={id} popup={popup} />);
};
