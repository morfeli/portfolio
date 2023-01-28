import { motion } from "framer-motion";

type NavItemProps = {
  link: string;
  closeMenu?: React.MouseEventHandler<HTMLLIElement>;
  children: React.ReactNode;
  isMobile?: boolean;
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
  children,
  link,
  variants,
  isMobile,
}: NavItemProps) => {
  let href: string;
  if (link === "/login") {
    href = "/login";
  } else {
    href = `#${link}`;
  }

  return (
    <motion.a
      variants={variants}
      className={
        isMobile ? "landing-container__mobileMenu-item" : "nav-links--link"
      }
      href={href}
      onClick={(e) => {
        if (href === "/login") return;
        const section = document.getElementById(`${link}`);
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <li onClick={closeMenu} className="landing-container__navItem">
        {children}
      </li>
    </motion.a>
  );
};

export default NavItem;
