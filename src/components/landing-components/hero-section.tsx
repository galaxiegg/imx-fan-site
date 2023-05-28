import React from "react";
import { DefaultImages } from "../../utils/default-images";
import { Button } from "../common/button";

const HeroSection = () => {
  return (
    <section className="relative  w-screen flex flex-col lg:flex-row">
      <div className="relative max-w-md flex-1">
        <h1 className="text-5xl mb-4 mt-24">
          Discover Immutable on Galaxie.gg
        </h1>
        <p className="  mb-4">
          Galaxie is the ultimate online hub for everything related to the
          exciting world of IMX. Explore everything from Games and DeFis to
          Collectibles and PFPs. test
        </p>
        <div className="mb-4 flex gap-4 flex-wrap">
          <Button className="">Discover IMX</Button>
          <Button outlined className="">
            Learn More
          </Button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={DefaultImages.ALIEN_QUEEN}
          alt="alien queen"
          className="flex-1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
