import React from "react";
import { DefaultImages } from "../../utils/default-images";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col  gap-10 relative w-screen px-10">
      <div className="flex items-center justify-between flex-col md:flex-row w-full z-10">
        <img
          className="block h-28 w-auto "
          src={DefaultImages.GALAXIE_FULL_LOGO}
          alt="Galaxie"
        />
        <div className="my-10 flex flex-col md:flex-row items-start md:gap-20">
          <div className="flex flex-col items-start gap-3 mb-3 max-w-xl">
            <a href={"#"}>Whitepaper</a>
            <a href={"#"}>About Galaxie.gg</a>
            <a href={"#"}>Careers</a>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a href={"#"}>Support</a>
            <a href={"#"}>Media</a>
            <a href={"#"}>Privacy Policy</a>
          </div>
        </div>

        <div className="my-18">
          <p className="mb-4 ">We're Social</p>
          <div className="flex flex-row items-center gap-3">
            <a>
              <img src={DefaultImages.FB_ICON} alt="facebook" />
            </a>
            <a>
              <img src={DefaultImages.YT_ICON} alt="youtube" />
            </a>
            <a>
              <img src={DefaultImages.TWITTER_ICON} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="my-20">
        <p>© 2023 Galaxie.gg </p>
      </div>
    </footer>
  );
};

export default Footer;
