import React, { useState } from 'react';
import Footer from '@layouts/footer/Footer';
import CustomAudio from '@components/custom-audio/custom-audio';
import './app.scss';
import { Outlet } from 'react-router';

import Snowfall from '@layouts/snowfall/snowfall';
import ActiveToyContext from '@contexts/ActiveToyContext';
import ActivePresentContext from '@contexts/ActivePresentContext';
import ActiveCandleContext from '@contexts/ActiveCandleContext';

function App() {
  const [activeToy, setActiveToy] = useState({ type: -1, x: 0, y: 0 });
  const [activePresent, setActivePresent] = useState({ type: -1, x: 0, y: 0 });
  const [activeCandle, setActiveCandle] = useState({ type: -1, x: 0, y: 0 });
  return (
    <ActiveToyContext.Provider value={[activeToy, setActiveToy]}>
      <ActivePresentContext.Provider value={[activePresent, setActivePresent]}>
        <ActiveCandleContext.Provider value={[activeCandle, setActiveCandle]}>
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
        </ActiveCandleContext.Provider>
      </ActivePresentContext.Provider>
    </ActiveToyContext.Provider>
  );
}

export default App;
