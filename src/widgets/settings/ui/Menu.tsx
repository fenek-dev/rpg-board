import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

import { RootState, store } from '~/app/store';
import { loadState } from '~/app/store/actions';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '~/shared/components/ui/menubar';

export const Menu = () => {
  const dispatch = useDispatch();
  const saveGame = () => {
    localStorage.setItem('save', JSON.stringify(store.getState()));
    toast.success('Game saved');
  };

  const loadGame = () => {
    const save = localStorage.getItem('save');
    if (save) {
      const state = JSON.parse(save) as RootState;
      dispatch(loadState(state));
      toast.success('Game loaded');
    } else {
      toast.error('No save found');
    }
  };

  return (
    <Menubar className="fixed left-1/2 top-1 z-50 -translate-x-1/2">
      <MenubarMenu>
        <MenubarTrigger>Game</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Game</MenubarItem>
          <MenubarItem>Exit to menu</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Interface</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Reset all windows</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Preferences</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Settings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Save</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={saveGame}>Save game</MenubarItem>
          <MenubarItem onClick={loadGame}>Load Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
