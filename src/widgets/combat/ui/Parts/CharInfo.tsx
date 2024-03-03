import { useSelector } from 'react-redux';

import { Button } from '~/shared/components/ui/button';

import { selectCurrentEntity } from '../../store/combat.selectors';

export const CharInfo = () => {
  const { entity } = useSelector(selectCurrentEntity);
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">Actions left: {entity.actions_left}🔹</Button>
      <Button variant="outline">
        Energy: {entity.stats.energy} / {entity.stats.max_energy} ⚡️
      </Button>
    </div>
  );
};
