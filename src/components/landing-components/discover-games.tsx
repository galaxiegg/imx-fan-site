import React from "react";
import ProjectCard from "../common/cards/project-card";

const DiscoverGames = () => {
  return (
    <section className=" py-28 w-screen">
      <h1 className=" text-4xl">Discover</h1>
      <p className="text-secondary">
        The future of web3 gaming is powered by Immutable
      </p>
      <div className="flex flex-row gap-8 my-8 md:my-16 overflow-hidden">
        <ProjectCard
          logo={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679795964/image_2_ciyowz.png"
          }
          image={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679736720/galaxie-projects/angelic-logo-400x400_erryyy.jpg"
          }
          projectLink={"#"}
          name={"PVP Game"}
          genre="PVP Game"
        />
        <ProjectCard
          logo={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679795964/image_2_ciyowz.png"
          }
          image={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679743681/galaxie-projects/the-lost-glitches-logo-400x400_nyfv9h.jpg"
          }
          projectLink={"#"}
          name={"PVP Game"}
          genre="PVP Game"
        />
        <ProjectCard
          logo={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679795964/image_2_ciyowz.png"
          }
          image={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679736720/galaxie-projects/bitverse-logo-166x166_t9op4s.png"
          }
          projectLink={"#"}
          name={"PVP Game"}
          genre="PVP Game"
        />
        <ProjectCard
          logo={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679795964/image_2_ciyowz.png"
          }
          image={
            "https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679734641/galaxie-projects/undead-blocks-logo-400x400_fccpgs.jpg"
          }
          projectLink={"#"}
          name={"PVP Game"}
          genre="PVP Game"
        />
      </div>
    </section>
  );
};

export default DiscoverGames;
