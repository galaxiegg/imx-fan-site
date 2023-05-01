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
import {Paths} from "./paths";

const router: RouteObject[] = [
  {
    path: Paths.toHome(),
    element: <HomePage />,
  },
  {
    path: Paths.toBlockchains(),
    element: <BlockchainsPage />,
  },
  {
    path: Paths.toGames(),
    element: <GamesPage />,
  },
  {
    path: Paths.toDapps(),
    element: <DAppsPage />,
  },
];

const ApplicationRouter = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default ApplicationRouter;
