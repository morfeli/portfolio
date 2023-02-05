import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const links = [
  { name: "About", to: "About", id: 1 },
  { name: "Teams", to: "Teams", id: 2 },
  { name: "Projects", to: "Projects", id: 3 },
  // { name: "NFTs", to: "crypto", id: 4 },
  { name: "Contact", to: "Contact", id: 5 },
];

type NavigationProps = {
  active: string;
};

export const Navigation = ({ active }: NavigationProps) => {
  const [activeTab, setActiveTab] = useState<string>("About");

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

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
