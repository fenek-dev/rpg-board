import { Attack } from '~/entities/extendable/attacks';
import { Button, ButtonProps } from '~/shared/components/ui/button';

import { AttackDetails } from './AttackDetails';

interface AttackSlotProps extends ButtonProps {
  attack: Attack;
  cooldown: number;
}

export const AttackSlot = ({ attack, cooldown, ...props }: AttackSlotProps) => {
  return (
    <AttackDetails attack={attack}>
      <Button
        className="relative text-xl transition-all"
        disabled={cooldown > 0}
        draggable={true}
        onMouseDown={(e) => e.stopPropagation()}
        size="slot"
        variant="outline"
        {...props}
      >
        {cooldown > 0 && (
          <span className="absolute left-0 top-0 rounded-full bg-red-500 px-1 text-xs text-white">{cooldown}</span>
        )}
        {attack.icon}
      </Button>
    </AttackDetails>
  );
};
