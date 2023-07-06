import React, { Dispatch, useReducer } from 'react';
import Header from '@layouts/header/Header';
import Main from '@layouts/main/Main';
import Footer from '@layouts/footer/Footer';
import { getData } from '@services/getData';
import { toy } from '@interfaces/toy';
import { FilterCreation } from '@services/filterTypes';
import filterReducer from '@services/filter-reducer';
import FilterContext from '@contexts/FilterContext';

export const data: toy[] = getData();
export interface ChangePageFunc {
  changePage: Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  return (
    <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
      <Header />
      <Main />
      <Footer />
    </FilterContext.Provider>
  );
}

export default App;
