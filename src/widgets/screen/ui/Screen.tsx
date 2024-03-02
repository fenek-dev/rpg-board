import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { CombatScreen } from '~/widgets/combat/ui/CombatScreen';
import { MapScreen } from '~/widgets/map/ui/Map';

export const ScreenPage = () => {
  const current_screen = useSelector((state: RootState) => state.screen.current_screen);
  return (
    <div className="h-full w-full p-14">
      {current_screen === 'map' && <MapScreen />}
      {current_screen === 'combat' && <CombatScreen />}
      {/* {current_screen === 'event' && <Event />}
    {current_screen === 'shop' && <Shop />} */}
    </div>
  );
};
