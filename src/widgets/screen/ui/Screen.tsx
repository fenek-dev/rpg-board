import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { Fallback } from '~/app/layout/ui/Fallback';
import { RootState } from '~/app/store';

const CombatScreen = lazy(() => import('~/widgets/combat/ui/CombatScreen'));
const MapScreen = lazy(() => import('~/widgets/map/ui/Map'));

export const ScreenPage = () => {
  const current_screen = useSelector((state: RootState) => state.screen.current_screen);
  return (
    <div className="h-full w-full p-14">
      <Suspense fallback={<Fallback />}>
        {current_screen === 'map' && <MapScreen />}
        {current_screen === 'combat' && <CombatScreen />}
      </Suspense>
      {/* {current_screen === 'event' && <Event />}
    {current_screen === 'shop' && <Shop />} */}
    </div>
  );
};
