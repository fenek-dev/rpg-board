import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';

export const AttackPanel = () => {
  const attacks = useSelector((state: RootState) => state.combat.attacks);

  return (
    <div className="mb-2 mt-4 flex flex-wrap gap-2">
      {attacks.map((a) => (
        <Button draggable key={a.name} onMouseDown={(e) => e.stopPropagation()} size="slot" variant="outline">
          {a.icon}
        </Button>
      ))}
    </div>
  );
};
