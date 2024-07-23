import * as React from 'react';


const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span 
      onClick={onClick} 
      className={`selectbutton ${selected ? 'selected' : ''}`}
    >
      {children}
    </span>
  );
};

export default SelectButton;
