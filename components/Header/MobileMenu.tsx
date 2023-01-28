import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: React.MouseEventHandler<HTMLLIElement>;
};

const links = [
  { name: "About", to: "about", id: 1 },
  { name: "Teams", to: "teams", id: 2 },
  { name: "Projects", to: "projects", id: 3 },
  { name: "Crypto", to: "crypto", id: 4 },
  { name: "Contact", to: "contact", id: 5 },
];

const navBarVariants = {
  closed: { opacity: 0, y: -100 },
  open: { opacity: 1, y: 0 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          aria-label="Site Navigation"
          role="navigation"
          variants={navBarVariants}
          initial="closed"
          animate="open"
          transition={{ type: "spring", stiffness: 100 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { delay: 0.5, duration: 0.3 },
          }}
          className="absolute top-20"
        >
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ name, to, id }) => {
              return (
                <NavItem
                  key={id}
                  link={to}
                  isMobile
                  closeMenu={closeMenu}
                  variants={itemVariants}
                >
                  {name}
                </NavItem>
              );
            })}
          </motion.ul>
          {/* <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            className="landing-container__mobileMenu-socialBox"
          ></motion.div> */}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
