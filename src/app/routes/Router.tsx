import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Fallback } from '../layout/ui/Fallback';

const App = React.lazy(() => import('~/pages/App'));

export const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Fallback />}>
            <App />
          </Suspense>
        }
        path="/"
      />
    </Routes>
  );
};
