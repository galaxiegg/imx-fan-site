import React from "react";
import { DefaultImages } from "../../utils/default-images";

interface HeroLayoutProps {
  children: React.ReactNode;
}

const HeroLayout = (props: HeroLayoutProps) => {
  return (
    <section className="relative  w-screen flex flex-col lg:flex-row">
      <div className="relative max-w-md flex-1">
        <h1 className="text-5xl mb-4 mt-24">
          Discover Immutable on Galaxie.gg
        </h1>
        {props.children}
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

export default HeroLayout;
