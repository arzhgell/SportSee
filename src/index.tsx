import React from 'react';
import { createRoot } from 'react-dom/client';

import { reportWebVitals } from './reportWebVitals';
import { Router } from './Router';

import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<Router />);
}

reportWebVitals();
