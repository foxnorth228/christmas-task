import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/route';

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
