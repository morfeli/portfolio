import { useState, useEffect } from "react";

import { Twitter, Discord, Github } from "../UI/SocialLinks";
import { MobileBtn } from "./MobileBtn";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="sticky flex items-center justify-between p-4 text-white border-b-2 border-b-white">
      <h2 className="text-lg">@morfelidev</h2>
      <div className="flex">
        <div className="flex items-center justify-between mr-4 w-28">
          <Discord />
          <Github />
          <Twitter />
        </div>
        <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        <MobileMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
      </div>
    </header>
  );
};
