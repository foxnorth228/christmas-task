import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/route';
import {Provider} from "react-redux";
import {store} from "@src/store";

const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
} else {
  throw new Error("Element with id root doesn't exist");
}
