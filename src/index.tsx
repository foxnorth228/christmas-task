import React from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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

type ElemOrNull = Element | null;

function App() {
  return (
    <>
      <Header />
      <Main />
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