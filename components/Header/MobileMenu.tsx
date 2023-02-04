import NavItem from "./NavItem";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import MorfeliSVG from "components/UI/MorfeliSVG";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: React.MouseEventHandler<HTMLLIElement>;
};

const links = [
  { name: "About", to: "About", id: 1 },
  { name: "Teams", to: "Teams", id: 2 },
  { name: "Projects", to: "Projects", id: 3 },
  // { name: "NFTs", to: "crypto", id: 4 },
  { name: "Contact", to: "Contact", id: 5 },
];

const navBarVariants = {
  closed: { opacity: 0, x: 100 },
  open: { opacity: 1, x: 0 },
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
  const navStyles = classNames(
    "md:hidden fixed w-screen top-20 right-0 z-40 bg-[#6c757d] flex flex-col items-center justify-evenly h-screen"
  );

  const ulStyles = classNames({
    hidden: !isOpen,
    "flex flex-col h-screen justify-evenly items-center opacity-100 transition-all my-4 text-white":
      isOpen,
  });

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
            x: "100%",
            transition: { delay: 0.5, duration: 0.3 },
          }}
          className={navStyles}
        >
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className={ulStyles}
          >
            {links.map(({ name, to, id }) => {
              return (
                <NavItem
                  isMobile
                  key={id}
                  link={to}
                  closeMenu={closeMenu}
                  variants={itemVariants}
                  name={name}
                />
              );
            })}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <MorfeliSVG mobile />
            </motion.div>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
