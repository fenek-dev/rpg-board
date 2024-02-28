import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { CombatBelongs } from '../store/combat.types';
import { Entity } from './Entity';

export const PlayerEntity = () => {
  const player = useSelector((state: RootState) => state.combat.player);
  return (
    <Entity
      entity={{
        attack: 0,
        belong: CombatBelongs.PLAYER,
        defense: 0,
        h: 1,
        hp: 0,
        icon: '👤',
        id: 'player',
        name: 'Player',
        w: 1,
        ...player,
      }}
    />
  );
};
