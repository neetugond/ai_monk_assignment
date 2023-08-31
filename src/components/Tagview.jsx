import React, { useState } from 'react'
import './style.css'


function Tagview({ tag, onaddChild }) {
    const [data, setData] = useState(tag.data || '');
  const [children, setChildren] = useState(tag.children || []);

  const handleAddChild = () => {
    const newChild = {
      name: `child${children.length + 1}`,
    };
    setChildren([...children, newChild]);
  };
    return (
        <>
        <div className="tag">
          <div className="tag-header">
            <span>{tag.name}</span>
            <button onClick={handleAddChild}>Add Child</button>
          </div>
          <div className="tag-data">
            {children.map((child, index) => (
              <Tagview key={index} tag={child} onAddChild={handleAddChild} />
            ))}
            {data && <p>{data}</p>}
          </div>
        </div>
        </>
      );
    };

export default Tagview