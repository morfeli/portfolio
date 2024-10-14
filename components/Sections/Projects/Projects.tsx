import { ProjectCard } from "./ProjectCard";
import { SectionLayout } from "../Layouts/SectionLayout";

const projectArray = [
  {
    id: 15,
    name: "Butane",
    href: "https://butane.dev/",
    image: "/butane1.png",
  },
  {
    id: 14,
    name: "OutboundANI LMS",
    href: "https://ob-lms.vercel.app",

    image: "/bcicrm.png",
  },

  {
    id: 10,
    name: "Travel Bud",
    href: "https://travel-bud-morfeli.vercel.app/",
    image: "/travel.png",
  },
  {
    id: 8,
    name: "Product Feedback",
    href: "https://feedback-dashboard-morfeli.vercel.app/",
    image: "/feedback.png",
  },
];

export const Projects = () => {
  return (
    <SectionLayout link="Projects">
      <h2 className="py-4">Recent work</h2>
      <div className="grid gap-1 py-4 justify-items-center grid-cols-repeatMin300px">
        {projectArray.map((item, i) => (
          <ul>
            <ProjectCard
              key={item.name}
              image={item.image}
              name={item.name}
              link={item.href}
            />
          </ul>
        ))}
      </div>
    </SectionLayout>
  );
};
