import { useDispatch } from 'react-redux';

import { Button } from '~/shared/components/ui/button';

import { nextTurn } from '../../store/combat.slice';
import { AttackPanel } from '../AttackPanel';

export const CombatFooter = () => {
  const dispatch = useDispatch();
  const onNextTurn = () => {
    dispatch(nextTurn());
  };
  return (
    <div className="fixed inset-4 top-auto flex items-end justify-between gap-10">
      <Button className="text-lg" size="lg" variant="outline">
        Energy info
      </Button>
      <AttackPanel />
      <Button className="text-lg" onClick={onNextTurn} size="lg" variant="outline">
        Next Turn
      </Button>
    </div>
  );
};
