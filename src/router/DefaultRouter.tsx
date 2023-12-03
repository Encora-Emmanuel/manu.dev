import React from "react";
import { FunctionComponent, memo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";

const Router: FunctionComponent = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export const DefaultRouter = memo(Router);
