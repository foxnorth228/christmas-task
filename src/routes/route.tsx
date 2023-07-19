import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '@pages/app/app';
import StartPage from '@pages/start-page/start-page';
import ToyPage from '@pages/toy-page/toy-page';
import TreePage from '@pages/tree-page/tree-page';
import React from 'react';

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

export default router;
