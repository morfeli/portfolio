import { SectionLayout } from "../Layouts/SectionLayout";
import { TeamList } from "./TeamList";

const teamList = [
  {
    id: 0,
    href: "https://www.falseidols.xyz/",
    src: "/false-idols-img.jpg",
    team: "False Idols",
    title: "Frontend Engineer",
  },
  {
    id: 1,
    href: "https://pedra.app/",
    src: "/pedra-img.png",
    team: "Pedra",
    title: "Frontend Engineer",
  },
];

export const Teams = () => {
  return (
    <SectionLayout link="Teams">
      <ul className="grid h-48 gap-1 py-2 grid-cols-repeatMin300px lg:justify-items-center">
        {teamList.map(({ href, src, team, title, id }, i) => {
          return (
            <TeamList
              href={href}
              src={src}
              team={team}
              title={title}
              key={id}
            />
          );
        })}
      </ul>
    </SectionLayout>
  );
};
