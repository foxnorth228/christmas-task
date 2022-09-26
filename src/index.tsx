import React from 'react';
import { createRoot } from 'react-dom/client';
import data from './data.json';

import './index.css';
import Header from './modules/header/Header';
import Main from './modules/main/Main';
import Footer from './modules/footer/Footer';

console.log(data);
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

//type ElemOrNull = Element | null;

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
