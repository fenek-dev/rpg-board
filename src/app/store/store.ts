import { configureStore } from '@reduxjs/toolkit';

import blocksSlice from '~/widgets/blocks/store/blocks.slice';
import playerSlice from '~/widgets/player/store/player.slice';

export const store = configureStore({
  reducer: {
    blocks: blocksSlice,
    player: playerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
