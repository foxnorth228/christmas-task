import React from 'react';
import './selector-garland.scss';

const SelectorGarland = () => {
  const garlands = ['multicolor', 'red', 'blue', 'yellow', 'green'];
  return (
    <div className="selectorGarland">
      <h2 className="selectorGarland__title">Гирлянда</h2>
      <div className="selectorGarland__elements">
        {garlands.map((el, i) => (
          <div className={`selectorGarland__element selectorGarland__element_${el}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SelectorGarland;
