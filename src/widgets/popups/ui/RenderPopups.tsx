import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { PopupWithGrid } from './PopupWithGrid';

export const RenderPopups = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);

  return (
    <div>
      {Object.keys(popups).map((id) => (
        <PopupWithGrid id={id} key={id} />
      ))}
      ;
    </div>
  );
};
