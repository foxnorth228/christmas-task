import React from 'react';
import './style.scss';

interface IFilterUnit {
  title: string;
  children: React.ReactNode;
}

const FilterUnit = ({ title, children }: IFilterUnit) => {
  return (
    <div className="filterUnit">
      <h3 className="filterUnit__title">{title}</h3>
      {children}
    </div>
  );
};

export default FilterUnit;
