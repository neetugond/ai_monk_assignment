import React, { useState } from 'react'
import './style.css'


function Tagview({ tag}) {
    const [dropdown, setDropdown] = useState(false)
    const [data, setData] = useState(tag.data || '');
  const [children, setChildren] = useState(tag.children || []);

  const handleAddChild = () => {
    const newChild = { name: 'new-child', data: '' };
    setChildren([...children, newChild]);
  };
    const handleDropdownToggle = () => {
        setDropdown(!dropdown);
    };

    return (
        <>
        <div className="tag">
                <div className="tag-header">
                    <div className='tag-left'>
                    <button onClick={handleDropdownToggle}>{dropdown ? '>' : 'v'} </button>
                    <span>{tag.name}</span>
                    </div>
                    
                    <button onClick={handleAddChild}>Add Child</button>
                    
                </div>
                {!dropdown && (
                    <div className="tag-data">
                        <label>Data </label>
                        <input type="text" value={data}  onChange={(e) => {
                    setData(e.target.value);
                     }} />
                    {children.map((child, index) => (
                      <Tagview key={index} tag={child} onAddChild={handleAddChild} />
                    ))}
                  </div>

                )}
          
        </div>
        </>
      );
    };

export default Tagview