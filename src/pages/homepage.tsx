import React from "react";
import axios, { AxiosResponse } from "axios";
import DiscoverProjects from "../components/landing-components/discover-projects";
import HeroSection from "../components/landing-components/hero-section";
import LatestNews from "../components/landing-components/lastest-news";
import Layout from "../components/common/layouts/layout";
import { Projects } from "../infrastructure/backend/projects";
import {BackendPaths} from "../router/backend-paths";
import {Paths} from "../router/paths";

export const HomePage = () => {
  const [projects, setProjects] = React.useState<Projects[]>([]);

  const fetchProjects = async () => {
    const response: AxiosResponse = await axios.get(BackendPaths.toProjects());
    setProjects(response.data);
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <DiscoverProjects
        title="Blockchain"
        linksTo={Paths.toBlockchains()}
        data={projects}
      />
      {/*<DiscoverGames title="Games" linksTo="/games" />*/}
      {/*<DiscoverGames title="DApps" linksTo="/dapps" />*/}
      <LatestNews />
    </Layout>
  );
};
