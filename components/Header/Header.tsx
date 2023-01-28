import { useState } from "react";

import { Twitter, Github, LinkedIn } from "../UI/SocialLinks";
import { MobileBtn } from "./MobileBtn";
import MobileMenu from "./MobileMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 text-white border-b-2 border-b-white md:flex-col md:h-screen md:border-b-0 md:border-r-2 md:p-0 md:w-56">
      <h2 className="text-lg md:pt-8">@morfelidev</h2>

      <Navigation />
      <div className="flex">
        <div className="flex items-center justify-between mr-4 w-28 md:mr-0 md:pb-8">
          <Github />
          <Twitter />
          <LinkedIn />
        </div>
        <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        <MobileMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
      </div>
    </header>
  );
};
