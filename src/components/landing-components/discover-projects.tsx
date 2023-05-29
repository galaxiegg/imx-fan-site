import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../common/cards/project-card";
import { Projects } from "../../infrastructure/backend/projects";
import Carousel from "../common/carousel/carousel";
import { CarouselItem } from "../common/carousel/carousel-item";

interface DiscoverGamesProps {
  title: string;
  linksTo: string;
  data: Projects[];
}

const DiscoverProjects = (props: DiscoverGamesProps) => {
  const { title, linksTo, data } = props;

  return (
    <section className=" py-8 w-screen">
      <Link to={linksTo}>
        <h1 className=" text-4xl">{title}</h1>
      </Link>
      <p className="text-secondary">
        The future of web3 gaming is powered by Immutable
      </p>
      <div className="flex flex-row gap-8 my-8 md:my-16 overflow-hidden">
        <Carousel show={4} showProgressDots totalCards={data.length} showLeftRightIndicator>
          {data.map((datum: Projects, index: number) => {
            return (
              <CarouselItem key={`project-${index}`}>
                <ProjectCard
                  key={"project" + index}
                  logo={datum.logo}
                  image={
                    "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679736720/galaxie-projects/angelic-logo-400x400_erryyy.jpg"
                  }
                  projectLink={"#"}
                  name={datum.name}
                  genre={datum.game_project}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default DiscoverProjects;
