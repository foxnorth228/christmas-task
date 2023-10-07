import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/route';

console.log('root')
const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode).render(<RouterProvider router={router} />);
} else {
  throw new Error("Element with id root doesn't exist");
}
