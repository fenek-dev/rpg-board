import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Attack } from '~/entities/extendable/attacks';
import { Button } from '~/shared/components/ui/button';

export const AttackPanel = () => {
  const attacks = useSelector((state: RootState) => state.combat.attacks);

  const onDragStart = (attack: Attack, id: string) => (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('attack', JSON.stringify(attack));
    event.dataTransfer.setData('attack_id', JSON.stringify(id));
    event.dataTransfer.effectAllowed = 'all';
    window.attack = attack;
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.remove('opacity-60');
  };

  return (
    <div className="mb-2 mt-4 flex flex-wrap gap-2">
      {Object.entries(attacks).map(([id, attack]) => (
        <Button
          draggable={true}
          key={id}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart(attack, id)}
          onMouseDown={(e) => e.stopPropagation()}
          size="slot"
          variant="outline"
        >
          {attack.icon}
        </Button>
      ))}
    </div>
  );
};
