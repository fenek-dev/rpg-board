import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useDialog } from '~/app/providers/dialog';
import { LINKS } from '~/app/routes/links';
import { RootState, store } from '~/app/store';
import { loadState } from '~/app/store/actions';
import { AlertDialogTrigger } from '~/shared/components/ui/alert-dialog';
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
  const navigate = useNavigate();
  const { openDialog } = useDialog();
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

  const exitToMenu = () => {
    openDialog({
      action: () => {
        navigate(LINKS.MainMenu);
      },
      description: 'Make sure that you saved before exit',
      title: 'All unsaved progress will be lost!',
    });
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <Menubar className="fixed left-1/2 top-1 z-50 -translate-x-1/2">
      <MenubarMenu>
        <MenubarTrigger>Game</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Game</MenubarItem>
          <AlertDialogTrigger asChild onClick={exitToMenu}>
            <MenubarItem>Exit to menu</MenubarItem>
          </AlertDialogTrigger>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Interface</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Reset all windows</MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={toggleFullscreen}>Toggle Fullscreen</MenubarItem>
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
