import React from 'react';
import { useSelector } from 'react-redux';

import { Attack } from '~/entities/extendable/attacks';
import { Button } from '~/shared/components/ui/button';

import { selectCurrentEntityAttacksWithCooldown, selectIsCurrentEntityFriendly } from '../store/combat.selectors';

export const AttackPanel = () => {
  const attacks = useSelector(selectCurrentEntityAttacksWithCooldown);
  const isFriendly = useSelector(selectIsCurrentEntityFriendly);

  const onDragStart = (attack: Attack, id: string) => (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('attack', JSON.stringify(attack));
    event.dataTransfer.setData('attack_id', id);
    event.dataTransfer.effectAllowed = 'all';
    window.attack = attack;
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.remove('opacity-60');
  };

  return (
    <div className="flex min-h-10 w-full flex-wrap gap-2 rounded-md border border-input bg-background px-4 py-2">
      {isFriendly ? (
        Object.entries(attacks).map(([id, { attack, cooldown }]) => (
          <Button
            className="relative text-xl transition-all"
            disabled={cooldown > 0}
            draggable={true}
            key={id}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart(attack, id)}
            onMouseDown={(e) => e.stopPropagation()}
            size="slot"
            variant="outline"
          >
            {cooldown > 0 && (
              <span className="absolute right-0 top-0 rounded-full bg-red-500 px-1 text-xs text-white">{cooldown}</span>
            )}
            {attack.icon}
          </Button>
        ))
      ) : (
        <Button variant="ghost">It's not your turn now</Button>
      )}
    </div>
  );
};
