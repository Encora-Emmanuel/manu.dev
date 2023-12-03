import React, { FunctionComponent } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Box } from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";

export const Layout: FunctionComponent = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    // client-side redirect
    return <Navigate to={{ pathname: "/me" }} />;
  }

  return (
    <Box sx={ss.container}>
      <Header data-testid="layout_header" />
      <main>{<Outlet />}</main>
      <Footer data-testid="layout_footer" />
    </Box>
  );
};

const ss = stylesheet({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
});
