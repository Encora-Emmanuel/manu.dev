import React, { FunctionComponent } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const Layout: FunctionComponent = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    // client-side redirect
    return <Navigate to={{ pathname: "/me" }} />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};
