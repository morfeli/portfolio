import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import RightArrowSVG from "components/UI/RightArrowSVG";

type NavItemProps = {
  link: string;
  name: string;
  closeMenu?: React.MouseEventHandler<HTMLLIElement>;
  isMobile?: boolean;
  activeTab?: string;
  onClick?: () => void;
  variants?: {
    closed: {
      opacity: number;
    };
    open: {
      opacity: number;
    };
  };
};

const NavItem = ({
  closeMenu,
  link,
  variants,
  isMobile,
  name,
  onClick,
  activeTab,
}: NavItemProps) => {
  const [hoverEffect, setHoverEffect] = useState<boolean>(false);

  return (
    <motion.a
      variants={variants}
      href={`#${link}`}
      onClick={(e) => {
        const section = document.getElementById(`${link}`);
        console.log(section);
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {isMobile ? (
        <li onClick={closeMenu}>{name}</li>
      ) : (
        <>
          <li
            id={`navLink-${link}`}
            onMouseEnter={() => {
              setHoverEffect((current) => !current);
            }}
            onMouseLeave={() => {
              setHoverEffect(false);
            }}
            onClick={onClick}
            className={classNames(
              "flex items-center pl-8 h-28 mx-auto transition-colors delay-75 ease-in-out relative tracking-wide",
              {
                // "bg-[#6c757d]": activeTab === name,
                "hover:bg-[#adb5bd]": activeTab !== name,
              }
            )}
          >
            {name}
            <RightArrowSVG
              hoverEffect={hoverEffect}
              name={name}
              activeTab={activeTab}
            />
          </li>
        </>
      )}
    </motion.a>
  );
};

export default NavItem;
