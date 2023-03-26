import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import DiscoverGames from "../components/landing-components/discover-games";
import HeroSection from "../components/landing-components/hero-section";
import LatestNews from "../components/landing-components/lastest-news";
import { DefaultImages } from "../utils/default-images";

export const HomePage = () => {
  return (
    <div className="bg-primary text-white relative">
      <Navbar />
      <img
        src={DefaultImages.LANDING_PAGE_GALAXIE_LEFT}
        alt="alien queen"
        className="absolute -left-[24px] top-0"
      />
      <HeroSection />
      <DiscoverGames />
      <LatestNews />
      <Footer />
      <img
        src={DefaultImages.LANDING_PAGE_GALAXIE_RIGHT}
        alt="galaxie"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};
