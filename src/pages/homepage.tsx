import React from "react";
import axios, { AxiosResponse } from "axios";
import DiscoverProjects from "../components/landing-components/discover-projects";
import HeroSection from "../components/landing-components/hero-section";
import LatestNews from "../components/landing-components/lastest-news";
import Layout from "../components/common/layouts/layout";
import { Projects } from "../infrastructure/backend/projects";

export const HomePage = () => {
  const [projects, setProjects] = React.useState<Projects[]>([]);

  const fetchProjects = async () => {
    const response: AxiosResponse = await axios.get(
      import.meta.env.VITE_BACKEND_BASE_URL + "projects/"
    );
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
        linksTo="/blockchains"
        data={projects}
      />
      {/*<DiscoverGames title="Games" linksTo="/games" />*/}
      {/*<DiscoverGames title="DApps" linksTo="/dapps" />*/}
      <LatestNews />
    </Layout>
  );
};
