import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { GearPopup } from '~/widgets/gear/ui/GearPopup';
import { MapPopup } from '~/widgets/map/ui/MapPopup';
import { Status } from '~/widgets/player/ui/Status';

import { PopupWithGrid } from './containers/PopupWithGrid';
import { Inventory } from './special/Inventory';

export const RenderPopups = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);

  return (
    <div>
      {Object.keys(popups).map((id) => {
        if (id === BASIC_POPUPS.Status.container_id) {
          return <Status key={id} />;
        }

        if (id === BASIC_POPUPS.Inventory.container_id) {
          return <Inventory id={id} key={id} />;
        }

        if (id === BASIC_POPUPS.Gear.container_id) {
          return <GearPopup key={id} />;
        }

        if (id === BASIC_POPUPS.Map.container_id) {
          return <MapPopup key={id} />;
        }

        return <PopupWithGrid id={id} key={id} />;
      })}
    </div>
  );
};
