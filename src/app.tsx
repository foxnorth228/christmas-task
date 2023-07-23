import React, {useReducer, useState} from 'react';
import Footer from '@layouts/footer/Footer';
import { getData } from '@services/getData';
import { toy } from '@interfaces/toy';
import { FilterCreation } from '@services/filterTypes';
import filterReducer from '@services/filter-reducer';
import FilterContext from '@contexts/FilterContext';
import TreeContext, { ITree } from '@contexts/TreeContext';
import './app.scss';
import { Outlet } from 'react-router';

export const data: toy[] = getData();

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  const [tree] = useState<ITree>({
    tree: 1,
    bg: 1,
    garland: 0,
    toys: [],
  });
  return (
    <TreeContext.Provider
      value={{
        tree,
        toggle: () => {
          return;
        },
      }}
    >
      <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
        <main className="main">{<Outlet />}</main>
        <Footer />
      </FilterContext.Provider>
    </TreeContext.Provider>
  );
}

export default App;
