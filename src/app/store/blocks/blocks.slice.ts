import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Block, SerializedBlocks } from "./blocks.types";
import { BASIC_UI_BLOCKS } from "./blocks.const";

export interface BlocksState {
  blocks: SerializedBlocks;
}

const initialState: BlocksState = {
  blocks: BASIC_UI_BLOCKS,
};

export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      const id = crypto.randomUUID();
      state.blocks[id] = action.payload;
    },
    changeBlockPosition: (
      state,
      action: PayloadAction<{ id: string | number; x: number; y: number }>
    ) => {
      state.blocks[action.payload.id].x += action.payload.x;
      state.blocks[action.payload.id].y += action.payload.y;
    },
  },
});

export const { changeBlockPosition } = blocksSlice.actions;

export default blocksSlice.reducer;
