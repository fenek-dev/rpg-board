import { Attack } from '~/entities/extendable/attacks';
import { Button, ButtonProps } from '~/shared/components/ui/button';

import { CombatEntity } from '../../store/combat.types';
import { AttackDetails } from './AttackDetails';

interface AttackSlotProps extends ButtonProps {
  attack: Attack;
  cooldown: number;
  entity: CombatEntity;
}

export const AttackSlot = ({ attack, cooldown, entity, ...props }: AttackSlotProps) => {
  return (
    <AttackDetails attack={attack} entity={entity}>
      <Button
        className="relative text-xl transition-all"
        disabled={cooldown > 0 || entity.actions_left < attack.action_cost}
        draggable={true}
        onMouseDown={(e) => e.stopPropagation()}
        size="slot"
        variant="outline"
        {...props}
      >
        {cooldown > 0 && (
          <span className="absolute left-0 top-0 rounded-full bg-red-500 px-1 text-xs text-white">{cooldown}</span>
        )}
        <span className="absolute bottom-0 right-0 text-xs text-white">{attack.action_cost}🔹</span>
        {attack.icon}
      </Button>
    </AttackDetails>
  );
};
