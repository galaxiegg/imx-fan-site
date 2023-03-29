import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  Router,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/homepage";
import BlockchainsPage from "../pages/blockchains-page";
import GamesPage from "../pages/games-page";
import DAppsPage from "../pages/dapps-page";

const router: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blockchains",
    element: <BlockchainsPage />,
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "/dapps",
    element: <DAppsPage />,
  },
];

const ApplicationRouter = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default ApplicationRouter;
