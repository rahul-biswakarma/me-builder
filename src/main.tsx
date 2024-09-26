import './global.css';
import '@radix-ui/themes/styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Product } from './product';
import { Theme } from '@radix-ui/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor="indigo"
      appearance="dark"
      grayColor="slate"
      panelBackground="translucent"
      radius="medium"
      scaling="100%"
    >
      <Product />
    </Theme>
  </StrictMode>,
);
