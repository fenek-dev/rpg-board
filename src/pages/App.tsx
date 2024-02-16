import { GridLayout } from '~/widgets/grid/ui/GridLayout';

function App() {
  // return <RenderPopups />;

  return (
    <>
      <div
        draggable={true}
        onDragStart={(event) => {
          event.dataTransfer.setData('block', '{}');
        }}
        style={{
          background: 'red',
          cursor: 'move',
          height: '30px',
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '30px',
        }}
      />
      <GridLayout cellSize={40} cols={10} rows={10} />
    </>
  );
}

export default App;
