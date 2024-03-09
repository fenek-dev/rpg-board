import { GearIcon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useDialog } from '~/app/providers/dialog';
import { LINKS } from '~/app/routes/links';
import { RootState, store } from '~/app/store';
import { loadState } from '~/app/store/actions';
import { AlertDialogTrigger } from '~/shared/components/ui/alert-dialog';
import { Button } from '~/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/shared/components/ui/dropdown-menu';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <GearIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={saveGame}>Save Game</DropdownMenuItem>
        <DropdownMenuItem onClick={loadGame}>Load Game</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={toggleFullscreen}>Toggle Fullscreen</DropdownMenuItem>
        <AlertDialogTrigger asChild onClick={exitToMenu}>
          <DropdownMenuItem>Exit to menu</DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
