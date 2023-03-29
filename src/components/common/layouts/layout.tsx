import React from 'react';
import Navbar from "../navbar";
import {DefaultImages} from "../../../utils/default-images";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="bg-primary text-white relative">
      <Navbar/>
      <img
        src={DefaultImages.LANDING_PAGE_GALAXIE_LEFT}
        alt="alien queen"
        className="absolute -left-[24px] top-0"
      />
      <div className={"min-h-[43vh]"}>
        {props.children}
      </div>
      <Footer/>
      <img
        src={DefaultImages.LANDING_PAGE_GALAXIE_RIGHT}
        alt="galaxie"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Layout;
