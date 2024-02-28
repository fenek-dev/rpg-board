import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';

export const AttackPanel = () => {
  const attacks = useSelector((state: RootState) => state.combat.attacks);

  return (
    <div className="mt-4 flex gap-2">
      {attacks.map((a) => (
        <Button key={a.name} size="icon" variant="outline">
          {a.icon}
        </Button>
      ))}
    </div>
  );
};
