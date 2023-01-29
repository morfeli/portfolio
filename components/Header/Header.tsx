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
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 text-white border-b-2 border-b-white md:flex-col md:h-screen  md:border-b-0 md:border-r-4 md:p-0 md:w-[400px] overflow-hidden overflow-y-scroll bg-[#343a40]">
      <div className="hidden mt-4 md:flex">
        <MorfeliSVG />
      </div>
      <h2 className="italic tracking-wide">Felipe Moreira</h2>
      <Navigation />
      <div className="flex">
        <div className="flex items-center justify-between mr-2 md:mr-0 md:pb-8 ">
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
