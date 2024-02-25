import { toast } from 'sonner';

import { store } from '~/app/store';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '~/shared/components/ui/menubar';

export const Menu = () => {
  const saveGame = () => {
    localStorage.setItem('save', JSON.stringify(store.getState()));
    toast.success('Game saved');
  };

  return (
    <Menubar className="fixed left-1/2 top-1 z-50 -translate-x-1/2">
      <MenubarMenu>
        <MenubarTrigger>Game</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Game</MenubarItem>
          <MenubarItem>Load Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
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
          <MenubarItem>Load Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
