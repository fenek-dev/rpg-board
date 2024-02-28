import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';

import { CombatBelongs } from '../store/combat.types';
import { CombatLayout } from './CombatLayout';
import { Entity } from './Entity';

export const CombatField = () => {
  const { h, w } = useSelector((state: RootState) => state.combat.fieldSizes);
  const entities = useSelector((state: RootState) => state.combat.entities);
  return (
    <CombatLayout className="relative rounded-md border border-input" cols={w} rows={h}>
      {entities.map((entity) => (
        <Entity disabled={entity.belong === CombatBelongs.ENEMY} entity={entity} key={entity.id} />
      ))}
      <Grid />
    </CombatLayout>
  );
};
