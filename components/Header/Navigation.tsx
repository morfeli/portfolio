import { useState } from "react";
import NavItem from "./NavItem";

const links = [
  { name: "About", to: "about", id: 1 },
  { name: "Teams", to: "teams", id: 2 },
  { name: "Projects", to: "projects", id: 3 },
  { name: "NFTs", to: "crypto", id: 4 },
  { name: "Contact", to: "contact", id: 5 },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState<string>("About");

  return (
    <nav className="hidden w-full mt-4 md:flex">
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
