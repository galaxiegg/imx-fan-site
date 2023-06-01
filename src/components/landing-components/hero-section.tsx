import React from "react";
import { Button } from "../common/button";
import HeroLayout from "./hero-layout";

const HeroSection = () => {
  return (
    <HeroLayout>
      <p className="  mb-4">
        Galaxie is the ultimate online hub for everything related to the
        exciting world of IMX. Explore everything from Games and DeFis to
        Collectibles and PFPs.
      </p>
      <div className="mb-4 flex gap-4 flex-wrap">
        <Button className="">Discover IMX</Button>
        <Button outlined className="">
          Learn More
        </Button>
      </div>
    </HeroLayout>
  );
};

export default HeroSection;
