import Tagview from './components/Tagview';


function App() {
  const initialTree = {
    name: 'root',
    children: [
      {
        name: 'child1',
        children: [
          { name: 'child1-child1', data: 'c1-c1 Hello' },
          { name: 'child1-child2', data: 'c1-c2 JS' },
        ],
      },
      { name: 'child2', data: 'c2 World' },
    ],
  };
  return (
    <div className="App">
        <Tagview tag={initialTree} />
    </div>
  );
}

export default App;
 