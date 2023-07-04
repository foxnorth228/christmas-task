import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from '@pages/app/app';

const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Element with id root doesn't exist");
}
