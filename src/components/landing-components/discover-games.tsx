import React from "react";
import ProjectCard from "../common/cards/project-card";
import axios, {AxiosResponse} from "axios";
import Configuration from "../../config/configuration";
import {Projects} from "../../infrastructure/backend/projects";

const DiscoverGames = () => {
  const [projects, setProjects] = React.useState<Projects[]>([]);

  React.useEffect(() => {
    axios.get(
      Configuration().backendBaseUrl + "projects/"
      ).then((response: AxiosResponse<Projects[]>) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <section className=" py-28 w-screen">
      <h1 className=" text-4xl">Discover</h1>
      <p className="text-secondary">
        The future of web3 gaming is powered by Immutable
      </p>
      <div className="flex flex-row gap-8 my-8 md:my-16 overflow-hidden">
        {  projects.map((datum: any, index: number) => {
            return <ProjectCard key={"project" + index}
              logo={
                "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679795964/image_2_ciyowz.png"
              }
              image={
                "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679736720/galaxie-projects/angelic-logo-400x400_erryyy.jpg"
              }
              projectLink={"#"}
              name={datum.name}
              genre={datum.genre}
            />
          })
        }
      </div>
    </section>
  );
};

export default DiscoverGames;
