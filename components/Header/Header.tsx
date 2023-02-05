import { useEffect, useState } from "react";

import { Twitter, Github, LinkedIn, MorfeliSVG } from "../UI/UI";
import { MobileBtn } from "./MobileBtn";
import MobileMenu from "./MobileMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("About");
  const [innerWidth, setInnerWidth] = useState<number>();

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  const changeWidth = () => setInnerWidth(window.innerWidth);

  // const changeBackground = () => {
  //   console.log(window.scrollY);

  //   if (window.scrollY >= 0 && window.scrollY <= 279) {
  //     setActive("About");
  //   } else if (window.scrollY >= 280 && window.scrollY <= 525) {
  //     setActive("Teams");
  //   } else if (window.scrollY >= 526 && window.scrollY <= 2349) {
  //     setActive("Projects");
  //   }
  // };

  useEffect(() => {
    changeWidth();
    // changeBackground();

    window.addEventListener("resize", changeWidth);
    // window.addEventListener("scroll", changeBackground);

    if (innerWidth == 768) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
      // window.removeEventListener("scroll", changeBackground);
    };
  }, [innerWidth]);

  useEffect(() => {
    const section = document.getElementById("body");

    if (isOpen) {
      section?.classList.add("open");
    } else {
      section?.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 lg:p-0 text-white border-b-2 w-screen lg:w-[400px] border-b-white lg:flex-col lg:h-screen  lg:border-b-0 lg:border-r-4 ;g:p-0  overflow-hidden overflow-y-scroll bg-[#343a40]">
      <div className="hidden mt-2 lg:flex">
        <MorfeliSVG />
      </div>
      <h2 className="italic tracking-wide">Felipe Moreira</h2>
      <Navigation active={active} />
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
