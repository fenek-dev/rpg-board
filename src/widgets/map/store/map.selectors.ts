import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/app/store';

export const selectCurrentTerrain = createSelector(
  (state: RootState) => state.map.graph,
  (state: RootState) => state.map.currentPosition,
  (graph, position) => graph[position[0]][position[1]]
);
