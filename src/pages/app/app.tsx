import React, { Dispatch, useReducer } from 'react';
import Footer from '@layouts/footer/Footer';
import { getData } from '@services/getData';
import { toy } from '@interfaces/toy';
import { FilterCreation } from '@services/filterTypes';
import filterReducer from '@services/filter-reducer';
import FilterContext from '@contexts/FilterContext';
import './app.scss';
import {Outlet} from "react-router";

export const data: toy[] = getData();
export interface ChangePageFunc {
  changePage: Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  return (
    <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
      <main className="main">{<Outlet />}</main>
      <Footer />
    </FilterContext.Provider>
  );
}

export default App;
