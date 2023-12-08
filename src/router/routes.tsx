import React from "react";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    id: "root",
    async lazy() {
      const { LandingPage } = await import("../pages/LandingPage/LandingPage");
      return { Component: LandingPage };
    },
    children: [],
  },
];
