import React, {useContext, useState} from "react";
import { Button } from "../button";
import {FollowedProjectsContext} from "../../providers/followed-projects-provider";
import {Paths} from "../../../router/paths";
import {useNavigate} from "react-router-dom";

interface ProjectCardProps {
  projectId: number;
  logo: string;
  image: string;
  projectLink: string;
  name: string;
  genre: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  let navigate = useNavigate();
  const { isFollowing, follow, unfollow } = useContext(FollowedProjectsContext);
  const id = props.projectId
  const following: boolean = isFollowing(id)

  const handleClick = async () => {
    try {
      following ? await unfollow(id) : await follow(id)
    } catch (e) {
      navigate(Paths.toLogin())
    }
  }

  return (
    <div className="project-card md:w-72 min-w-[15rem] mx-2">
      <div className="relative">
        <img
          src={props.logo}
          alt={props.name}
          className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        <button
          className={`absolute top-2 right-2 bg-transparent rounded-full p-2`}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-yellow-300`}
            fill={following ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 py-6 flex flex-col items-center gap-2">
        <p>{props.name}</p>
        {/* <p>{props.genre} </p> */}
        <Button outlined>View Project</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
