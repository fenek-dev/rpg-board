import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';

import { nextTurn } from '../../store/combat.slice';
import { AttackPanel } from '../Attack/AttackPanel';
import { CharInfo } from './CharInfo';

export const CombatFooter = React.memo(() => {
  const in_combat = useSelector((state: RootState) => state.combat.started);
  const dispatch = useDispatch();
  const onNextTurn = () => {
    dispatch(nextTurn());
  };
  return (
    <div className="fixed inset-4 top-auto flex items-end justify-between gap-10">
      <CharInfo />
      <AttackPanel />
      <Button className="text-lg" disabled={!in_combat} onClick={onNextTurn} size="lg" variant="outline">
        Next Turn
      </Button>
    </div>
  );
});
