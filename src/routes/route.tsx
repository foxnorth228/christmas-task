import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '@src/app';
import StartPage from '@pages/start-page/start-page';
import ToyPage from '@pages/toy-page/toy-page';
import TreePage from '@pages/tree-page/tree-page';
import React from 'react';
import { Redirect } from 'react-router';

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
      <Redirect from="*" to="/"></Redirect>
    </>
  )
);

export default router;
