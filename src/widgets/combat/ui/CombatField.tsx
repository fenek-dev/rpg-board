import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';
import { boardPositionStyle } from '~/shared/utils';

import { selectCombatEntitiesByBelongs } from '../store/combat.selectors';
import { CombatBelongs } from '../store/combat.types';

interface CombatFieldProps {
  belongs: CombatBelongs;
}

export const CombatField = ({ belongs }: CombatFieldProps) => {
  const { h, w } = useSelector((state: RootState) => state.combat.fieldSizes);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const entities = useSelector(selectCombatEntitiesByBelongs(belongs));
  return (
    <div className="relative rounded-md border border-input" style={boardPositionStyle(gridSize, w, h)}>
      <Grid />
    </div>
  );
};
