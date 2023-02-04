import { useEffect, useState } from "react";

import { Twitter, Github, LinkedIn, MorfeliSVG } from "../UI/UI";
import { MobileBtn } from "./MobileBtn";
import MobileMenu from "./MobileMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState<number>();

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();
    window.addEventListener("resize", changeWidth);

    if (innerWidth == 768) {
      setIsOpen(false);
    }
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [innerWidth]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 lg:p-0 text-white border-b-2 w-screen lg:w-[400px] border-b-white lg:flex-col lg:h-screen  lg:border-b-0 lg:border-r-4 ;g:p-0  overflow-hidden overflow-y-scroll bg-[#343a40]">
      <div className="hidden mt-2 lg:flex">
        <MorfeliSVG />
      </div>
      <h2 className="italic tracking-wide">Felipe Moreira</h2>
      <Navigation />
      <div className="flex">
        <div className="flex items-center justify-between mr-2 lg:mr-0 lg:pb-4">
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
