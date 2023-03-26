import React from "react";
import { Button } from "../button";

interface ProjectCardProps {
  logo: string;
  image: string;
  projectLink: string;
  name: string;
  genre: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card w-80 min-w-[15rem]">
      <img
        src={props.image}
        alt={props.name}
        className="min-h-96 w-full object-cover rounded-2xl"
      />
      <div className="px-4 py-6 flex flex-col items-center gap-2">
        <p>{props.name}</p>
        <img src={props.logo} alt={props.name} className="" />
        <Button outlined>View Project</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
