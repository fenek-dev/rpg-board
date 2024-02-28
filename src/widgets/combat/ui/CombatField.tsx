import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '~/app/layout';
import { RootState } from '~/app/store';

import { movePlayer } from '../store/combat.slice';
import { CombatBelongs } from '../store/combat.types';
import { CombatLayout } from './CombatLayout';
import { Entity } from './Entity';
import { PlayerEntity } from './PlayerEntity';

export const CombatField = () => {
  const dispatch = useDispatch();

  const { h, w } = useSelector((state: RootState) => state.combat.fieldSizes);
  const entities = useSelector((state: RootState) => state.combat.entities);

  const onPlayerMove = (x: number, y: number) => {
    dispatch(movePlayer({ x, y }));
  };

  return (
    <CombatLayout className="relative rounded-md border border-input" cols={w} onPlayerMove={onPlayerMove} rows={h}>
      {entities.map((entity) => (
        <Entity disabled={entity.belong === CombatBelongs.ENEMY} entity={entity} key={entity.id} />
      ))}
      <PlayerEntity />
      <Grid />
    </CombatLayout>
  );
};
