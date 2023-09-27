import React, { useReducer, useState } from 'react';
import Footer from '@layouts/footer/Footer';
import CustomAudio from '@components/custom-audio/custom-audio';
import './app.scss';
import { Outlet } from 'react-router';

import FilterContext, {filterKeyWord, FilterReducer} from '@contexts/filter-context';
import FilterCreation from '@services/getFilter';
import TreeContext, {TreeCreation, TreeReducer} from '@contexts/tree-context';
import ToysContext, { ToysReducer } from '@contexts/toys-context';
import getData from '@services/getData';
import Snowfall from '@layouts/snowfall/snowfall';
import ActiveToyContext from '@contexts/active-toy-context';

function App() {
  const filterSt = localStorage.getItem(filterKeyWord);
  const [filter, setFilter] = useReducer(
    FilterReducer,
    (filterSt && JSON.parse(filterSt)) || FilterCreation()
  );
  const [tree, setTree] = useReducer(TreeReducer, TreeCreation());
  const [toys, setToys] = useReducer(ToysReducer, getData());
  const [activeToy, setActiveToy] = useState({ type: -1, x: 0, y: 0 });
  return (
    <ToysContext.Provider value={{ toys, toysReducer: setToys }}>
      <TreeContext.Provider value={{ tree, treeReducer: setTree }}>
        <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
          <ActiveToyContext.Provider value={[activeToy, setActiveToy]}>
            <main className="main">
              {
                <>
                  <Snowfall />
                  <Outlet />
                </>
              }
            </main>
            <Footer />
            <CustomAudio />
          </ActiveToyContext.Provider>
        </FilterContext.Provider>
      </TreeContext.Provider>
    </ToysContext.Provider>
  );
}

export default App;
