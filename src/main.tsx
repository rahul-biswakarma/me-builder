import './global.css';
import '@radix-ui/themes/styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './components/sign-in';
import SignUpPage from './components/sign-up';
import { ProtectedLayout } from './layout/protected.layout';
import RootLayout from './layout/root.layout';
import { PageNotFound } from './components/page-not-found';
import { WelcomePage } from './components/welcome-page';
import { Product } from './components/product';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <WelcomePage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ':orgName/*',
            element: <Product />,
          },
        ],
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

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
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
);
