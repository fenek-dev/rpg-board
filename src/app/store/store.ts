import { combineReducers, configureStore } from '@reduxjs/toolkit';

import blocksSlice from '~/widgets/blocks/store/blocks.slice';
import gearSlice from '~/widgets/gear/store/gear.slice';
import playerSlice from '~/widgets/player/store/player.slice';
import popupsSlice from '~/widgets/popups/store/popups.slice';
import settingsSlice from '~/widgets/settings/store/settings.slice';

import { deathMiddleware } from './middlewares/death';
import { effectsMiddleware } from './middlewares/effect';
import { shopMiddleware } from './middlewares/shop';

const rootReducer = combineReducers({
  blocks: blocksSlice,
  gear: gearSlice,
  player: playerSlice,
  popups: popupsSlice,
  settings: settingsSlice,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(effectsMiddleware, deathMiddleware, shopMiddleware),
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
