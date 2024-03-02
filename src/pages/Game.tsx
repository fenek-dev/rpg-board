import { Background } from '~/app/layout/ui/Background';
import { Toaster } from '~/shared/components/ui/sonner';
import { Dialog } from '~/widgets/dialog/ui/Dialog';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';
import { Header } from '~/widgets/settings/ui/Header';

function Game() {
  return (
    <main>
      <Dialog>
        <Header />
        <RenderPopups />
        <Toaster />
        <Background />
      </Dialog>
    </main>
  );
}

export default Game;
