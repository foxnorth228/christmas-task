import React, { useReducer, useState } from 'react';
import Footer from '@layouts/footer/Footer';
import CustomAudio from '@components/custom-audio/custom-audio';
import './app.scss';
import { Outlet } from 'react-router';

import FilterContext, { filterKeyWord, FilterReducer } from '@contexts/filter-context';
import FilterCreation from '@services/getFilter';
import TreeContext, { TreeCreation, TreeReducer } from '@contexts/tree-context';
import Snowfall from '@layouts/snowfall/snowfall';
import ActiveToyContext from '@contexts/active-toy-context';
import TreesContext, { defaultTreesData, TreesReducer } from '@contexts/TreesContext';
import ActivePresentContext from '@contexts/ActivePresentContext';
import ActiveCandleContext from '@contexts/ActiveCandleContext';
import PresentContext, { PresentReducer } from '@contexts/PresentContext';

function App() {
  const filterSt = localStorage.getItem(filterKeyWord);
  const [filter, setFilter] = useReducer(
    FilterReducer,
    (filterSt && JSON.parse(filterSt)) || FilterCreation()
  );
  const [tree, setTree] = useReducer(TreeReducer, TreeCreation());
  const [activeToy, setActiveToy] = useState({ type: -1, x: 0, y: 0 });
  const [activePresent, setActivePresent] = useState({ type: -1, x: 0, y: 0 });
  const [activeCandle, setActiveCandle] = useState({ type: -1, x: 0, y: 0 });
  const [trees, setTrees] = useReducer(TreesReducer, defaultTreesData);
  const [presents, setPresents] = useReducer(PresentReducer, []);
  return (
    <TreeContext.Provider value={{ tree, treeReducer: setTree }}>
      <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
        <ActiveToyContext.Provider value={[activeToy, setActiveToy]}>
          <ActivePresentContext.Provider value={[activePresent, setActivePresent]}>
            <ActiveCandleContext.Provider value={[activeCandle, setActiveCandle]}>
              <TreesContext.Provider value={{ trees, treesReducer: setTrees }}>
                <PresentContext.Provider value={[presents, setPresents]}>
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
                </PresentContext.Provider>
              </TreesContext.Provider>
            </ActiveCandleContext.Provider>
          </ActivePresentContext.Provider>
        </ActiveToyContext.Provider>
      </FilterContext.Provider>
    </TreeContext.Provider>
  );
}

export default App;
