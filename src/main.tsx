import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Product } from './product';

import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Product />
  </StrictMode>,
);
