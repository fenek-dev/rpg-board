import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./player/player.slice";
import blocksSlice from "./blocks/blocks.slice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    blocks: blocksSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
