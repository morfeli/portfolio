import { useState } from "react";
import NavItem from "./NavItem";

const links = [
  { name: "About", to: "About", id: 1 },
  { name: "Projects", to: "Projects", id: 3 },
  { name: "Contact", to: "Contact", id: 4 },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState<string>("About");

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
