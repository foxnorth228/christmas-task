import React, { useState, Dispatch } from 'react';
import { createRoot } from 'react-dom/client';
import dataToys from './data.json';

import './index.css';
import Header from './modules/header/Header';
import Main from './modules/main/Main';
import Footer from './modules/footer/Footer';

export const data: toy[] = dataToys.map((el) => {
  return {
    ...el,
    num: Number.parseInt(el.num),
    count: Number.parseInt(el.count),
    year: Number.parseInt(el.year),
  };
});

export type toy = {
  num: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export interface ChangePageFunc {
  changePage: Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header changePage={setPage} />
      <Main page={page} changePage={setPage} />
      <Footer />
    </>
  );
}

const elRoot = document.getElementById('root');
if (elRoot) {
  const root = createRoot(elRoot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Element with id root doesn't exist");
}
