import { useDispatch } from 'react-redux';
import { Block, changeBlockPosition } from '~/widgets/blocks/store';
import { Render } from '~/widgets/blocks/ui/Render';
import { GridLayout } from '~/widgets/grid/ui/GridLayout';

function App() {
  // return <RenderPopups />;
  const dispatch = useDispatch();

  const onItemDrop = (x: number, y: number, item: Block, id: string, belong: string) => {
    dispatch(
      changeBlockPosition({
        belong,
        id,
        x,
        y,
      })
    );
  };

  return (
    <>
      <GridLayout cols={10} id="Inventory" onItemDrop={onItemDrop} rows={10}>
        <Render container_id="Inventory" />
      </GridLayout>
    </>
  );
}

export default App;
