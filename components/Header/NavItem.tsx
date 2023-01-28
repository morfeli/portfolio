import classNames from "classnames";
import { SetStateAction } from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.a
      variants={variants}
      href={`#${link}`}
      onClick={(e) => {
        const section = document.getElementById(`${link}`);
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {isMobile ? (
        <li onClick={closeMenu} className="">
          {name}
        </li>
      ) : (
        <li
          onClick={onClick}
          className={classNames(
            "flex items-center justify-center h-32 py-16 mx-auto  hover:bg-[#6c757d] transition-colors delay-75 ease-in-out",
            {
              "bg-[#343a40]": activeTab === name,
            }
          )}
        >
          {name}
        </li>
      )}
    </motion.a>
  );
};

export default NavItem;
