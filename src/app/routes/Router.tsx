import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Fallback } from '../layout/ui/Fallback';

const MainMenu = React.lazy(() => import('~/pages/MainMenu'));

export const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Fallback />}>
            <MainMenu />
          </Suspense>
        }
        path="/"
      />
    </Routes>
  );
};
