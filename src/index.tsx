import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from '@pages/app/app';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import StartPage from '@pages/start-page/start-page';
import ToyPage from '@pages/toy-page/toy-page';
import TreePage from '@pages/tree-page/tree-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route element={<Navigate to="/start" />} index />
        <Route element={<App />}>
          <Route path="start" element={<StartPage />}></Route>
          <Route path="toys" element={<ToyPage />}></Route>
          <Route path="tree" element={<TreePage />}></Route>
        </Route>
      </Route>
    </>
  )
);

const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  throw new Error("Element with id root doesn't exist");
}
