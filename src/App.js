import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tagview from './components/Tagview';
import './App.css'
const initialTree = {
  id: uuidv4(),
  name: 'root',
  children: [
    {
      id: uuidv4(),
      name: 'child1',
      children: [
        {id: uuidv4(), name: 'child1-child1', data: 'c1-c1 Hello' },
        { id: uuidv4(),name: 'child1-child2', data: 'c1-c2 JS' },
      ],
    },
    { id: uuidv4(), name: 'child2', data: 'c2 World' },
  ],
};

function App() {
  const [treeData, setTreeData] = useState(initialTree);
  const [content, setContent] = useState('')

  function removeid(obj) {
    if (Array.isArray(obj)) {
      return obj.map(el => removeid(el));
    } else if (typeof obj === 'object' && obj != null) {
      const { id, ...rest } = obj;
      return Object.fromEntries(
        Object.entries(rest).map(([key, value]) => [key, removeid(value)])
      );
    }
    return obj;
  }
  const handleExport = () => {
    const exportObjData = removeid(treeData);
    setContent(JSON.stringify(exportObjData, null, 2));
  };
    
  return (
    <div className="App">
      <Tagview tag={initialTree} />
      <button className='exportbtn' onClick={handleExport}>Export</button>
      <div>{ content}</div>
    </div>
  );
}

export default App;
 