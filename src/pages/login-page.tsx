import React from "react";
import axios, { AxiosResponse } from "axios";
import DiscoverProjects from "../components/landing-components/discover-projects";
import HeroSection from "../components/landing-components/hero-section";
import LatestNews from "../components/landing-components/lastest-news";
import Layout from "../components/common/layouts/layout";
import { Projects } from "../infrastructure/backend/projects";
import {BackendPaths} from "../router/backend-paths";
import {Paths} from "../router/paths";

export const LoginPage = () => {
  return (
    <Layout>
      Login Page
    </Layout>
  );
};
