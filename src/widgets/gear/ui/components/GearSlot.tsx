import { useSelector } from 'react-redux';

import { Button } from '~/shared/components/ui/button';

import { selectGear } from '../../store/gear.selector';
import { GearState } from '../../store/gear.slice';

interface GearSlotProps {
  defaultIcon: string;
  name: keyof GearState;
}

export const GearSlot = ({ defaultIcon, name }: GearSlotProps) => {
  const gear = useSelector(selectGear(name));
  return (
    <Button className="text-3xl" size="slot" title={name} variant="outline">
      {gear ? undefined : <span className="opacity-20">{defaultIcon}</span>}
    </Button>
  );
};
