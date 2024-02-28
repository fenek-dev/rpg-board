import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Fallback } from '../layout/ui/Fallback';
import { Providers } from '../providers';
import { LINKS } from './links';

const MainMenu = React.lazy(() => import('~/pages/MainMenu'));
const Game = React.lazy(() => import('~/pages/Game'));

export const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Fallback />}>
            <MainMenu />
          </Suspense>
        }
        path={LINKS.MainMenu}
      />
      <Route
        element={
          <Suspense fallback={<Fallback />}>
            <Providers>
              <Game />
            </Providers>
          </Suspense>
        }
        path={LINKS.Game}
      />
    </Routes>
  );
};
