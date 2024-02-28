import { combineReducers, configureStore } from '@reduxjs/toolkit';

import blocksSlice from '~/widgets/blocks/store/blocks.slice';
import combatSlice from '~/widgets/combat/store/combat.slice';
import equipmentSlice from '~/widgets/equipment/store/equipment.slice';
import mapSlice from '~/widgets/map/store/map.slice';
import playerSlice from '~/widgets/player/store/player.slice';
import popupsSlice from '~/widgets/popups/store/popups.slice';
import settingsSlice from '~/widgets/settings/store/settings.slice';

import { deathMiddleware } from './middlewares/death';
import { effectsMiddleware } from './middlewares/effect';
import { equipmentMiddleware } from './middlewares/equipment';
import { shopMiddleware } from './middlewares/shop';

const rootReducer = combineReducers({
  blocks: blocksSlice,
  combat: combatSlice,
  equipment: equipmentSlice,
  map: mapSlice,
  player: playerSlice,
  popups: popupsSlice,
  settings: settingsSlice,
});

const save = localStorage.getItem('save');

const preloadedState = save ? JSON.parse(save) : undefined;

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(effectsMiddleware, deathMiddleware, shopMiddleware, equipmentMiddleware),
  preloadedState,
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
