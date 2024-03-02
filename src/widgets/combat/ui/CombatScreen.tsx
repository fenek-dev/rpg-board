import { CombatField } from './CombatField';
import { CombatFooter } from './Footer/CombatFooter';

export const CombatScreen = () => {
  return (
    <div className="h-full w-full p-14 pb-24">
      <CombatField />
      <CombatFooter />
    </div>
  );
};
