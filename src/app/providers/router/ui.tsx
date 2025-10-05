import { RouterProvider, createBrowserRouter } from 'react-router';

import { AppLayout } from 'app/layout';

import { AdminRoute, VitrineRoute } from 'pages';

let router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [VitrineRoute, AdminRoute],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
