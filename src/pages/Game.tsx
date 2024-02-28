import { Background } from '~/app/layout/ui/Background';
import { Toaster } from '~/shared/components/ui/sonner';
import { Dialog } from '~/widgets/dialog/ui/Dialog';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';
import { Menu } from '~/widgets/settings/ui/Menu';

function Game() {
  return (
    <main>
      <Dialog>
        <Menu />
        <RenderPopups />
        <Toaster />
        <Background />
      </Dialog>
    </main>
  );
}

export default Game;
