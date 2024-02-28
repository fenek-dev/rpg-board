import { createSlice } from '@reduxjs/toolkit';

import { loadState, resetState } from '~/app/store/actions';
import { Attack } from '~/entities/extendable/attacks';

export interface CombatState {
  attacks: Attack[];
}

const initialState: CombatState = {
  attacks: [],
};

export const combatSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(loadState, (state, action) => {
        state = action.payload.combat;
        return state;
      })
      .addCase(resetState, () => initialState);
  },
  initialState,
  name: 'combat',
  reducers: {
    addAttacks: (state, action) => {},
  },
});

export const { addAttacks } = combatSlice.actions;

export default combatSlice.reducer;
