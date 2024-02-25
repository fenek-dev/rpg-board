import { createAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export const loadState = createAction('loadState', (state: RootState) => ({ payload: state }));

export const resetState = createAction('resetState');
