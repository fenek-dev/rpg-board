import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Status } from '~/widgets/player/ui/Status';

import { PopupWithGrid } from './containers/PopupWithGrid';

export const RenderPopups = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);

  return (
    <div>
      {Object.keys(popups).map((id) => {
        if (id === BASIC_POPUPS.Status.container_id) {
          return <Status key={id} />;
        }

        return <PopupWithGrid id={id} key={id} />;
      })}
    </div>
  );
};
