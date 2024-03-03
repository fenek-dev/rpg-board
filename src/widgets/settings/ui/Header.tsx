import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';

import { Menu } from './Menu';

export const Header = () => {
  const coins = useSelector((state: RootState) => state.player.money);
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-input bg-background p-2 px-6">
      <div>
        <Button variant="outline">{coins} 🪙</Button>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
