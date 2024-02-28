import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';

import { selectCombatEntitiesByBelongs } from '../store/combat.selectors';
import { CombatBelongs } from '../store/combat.types';
import { CombatLayout } from './CombatLayout';
import { Entity } from './Entity';

interface CombatFieldProps {
  belongs: CombatBelongs;
}

export const CombatField = ({ belongs }: CombatFieldProps) => {
  const { h, w } = useSelector((state: RootState) => state.combat.fieldSizes);
  const entities = useSelector(selectCombatEntitiesByBelongs(belongs));
  return (
    <CombatLayout className="relative rounded-md border border-input" cols={w} id={belongs} rows={h}>
      {entities.map((entity) => (
        <Entity entity={entity} key={entity.id} />
      ))}
      <Grid />
    </CombatLayout>
  );
};
