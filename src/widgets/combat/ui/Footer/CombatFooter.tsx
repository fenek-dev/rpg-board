import React from 'react';

import { Button } from '~/shared/components/ui/button';

import { AttackPanel } from '../AttackPanel';

export const CombatFooter = () => {
  return (
    <div className="fixed inset-4 top-auto flex items-end justify-between gap-10">
      <Button className="text-lg" size="lg" variant="outline">
        Energy info
      </Button>
      <AttackPanel />
      <Button className="text-lg" size="lg" variant="outline">
        Next Turn
      </Button>
    </div>
  );
};
