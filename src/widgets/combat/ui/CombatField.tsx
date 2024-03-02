import { useDispatch, useSelector } from 'react-redux';

import { selectEntitiesByBelongs } from '../store/combat.selectors';
import { EntityIcon } from './Entity/Entity';
import { Queue } from './Parts/Queue';

export const CombatField = () => {
  const dispatch = useDispatch();
  const { enemies, friendly } = useSelector(selectEntitiesByBelongs);

  return (
    <div className="relative flex h-full w-full items-end justify-between gap-10 p-4 px-8">
      <Queue />
      <div className="flex flex-wrap gap-4">
        {Object.entries(friendly).map(([id, entity]) => (
          <EntityIcon entity={entity} id={id} key={id} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {Object.entries(enemies).map(([id, entity]) => (
          <EntityIcon entity={entity} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
