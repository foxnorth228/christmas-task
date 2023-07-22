import React, { Dispatch, useReducer } from 'react';
import Footer from '@layouts/footer/Footer';
import { getData } from '@services/getData';
import { toy } from '@interfaces/toy';
import { FilterCreation } from '@services/filterTypes';
import filterReducer from '@services/filter-reducer';
import FilterContext from '@contexts/FilterContext';
import TreeContext from '@contexts/TreeContext';
import './app.scss';
import { Outlet } from 'react-router';

export const data: toy[] = getData();

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  return (
    <TreeContext.Provider value={{}}>
      <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
        <main className="main">{<Outlet />}</main>
        <Footer />
      </FilterContext.Provider>
    </TreeContext.Provider>
  );
}

export default App;
