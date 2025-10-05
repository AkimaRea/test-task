import { AppLayout } from "app/layout";
import { AdminRoute, VitrineRoute } from "pages";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [VitrineRoute, AdminRoute],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
