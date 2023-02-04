import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const links = [
  { name: "About", to: "About", id: 1 },
  { name: "Teams", to: "Teams", id: 2 },
  { name: "Projects", to: "Projects", id: 3 },
  // { name: "NFTs", to: "crypto", id: 4 },
  { name: "Contact", to: "Contact", id: 5 },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState<string>("About");

  // const changeBackground = () => {
  //   if (window.scrollY >= 0 && window.scrollY < 270) {
  //     setActiveTab("About");
  //   }

  //   if (window.scrollY >= 271 && window.scrollY < 510) {
  //     setActiveTab("Teams");
  //   }

  //   if (window.scrollY >= 511 && window.scrollY < 2150) {
  //     setActiveTab("Projects");
  //   }
  //   if (window.scrollY >= 2151) {
  //     setActiveTab("Contact");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  // }, []);

  return (
    <nav className="hidden w-full mt-2 lg:flex">
      <ul className="w-full text-center">
        {links.map(({ name, to, id }) => {
          return (
            <NavItem
              key={id}
              link={to}
              name={name}
              activeTab={activeTab}
              onClick={() => {
                setActiveTab(name);
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};
