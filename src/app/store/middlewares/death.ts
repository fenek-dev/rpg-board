import { Middleware } from 'redux';

import { RootState } from '../store';

export const deathMiddleware: Middleware<unknown, RootState> = (storeApi) => (next) => (action) => {
  next(action);

  const { player } = storeApi.getState();
  if (player.stats.hp <= 0) {
    console.log('Oh, you are dead');
  }
};
