import { ProjectCard } from "./ProjectCard";

import audiophile from "../../public/audiophile.png";
import bistro from "../../public/bistro.png";
import demelo from "../../public/demelo.png";
import designo from "../../public/designo.png";
import planets from "../../public/planets.png";
import pyro from "../../public/pyro.png";
import trattoria from "../../public/trattoria.png";
import travel from "../../public/travel.png";
import viajar from "../../public/viajar.png";
import feedback from "../../public/feedback.png";

const projectArray = [
  {
    id: 3,
    name: "Planets",
    description:
      "A information landing page about the planets in our solar system. Built with Vanilla JS.",
    href: "https://planets-morfeli.vercel.app/",
    image: planets,
  },

  {
    id: 5,
    name: "Designo",
    description: "A landing page for a creative agency built with React.",
    href: "https://designo-morfeli.vercel.app/",
    image: designo,
  },
  {
    id: 6,
    name: "Audiophile E-Commerce",
    href: "https://audiophile-morfeli.vercel.app/",
    description: "An e-commerce website built with Next.js.",
    image: audiophile,
  },
  {
    id: 7,
    name: "Demelo Dining",
    href: "https://www.demelodining.com/",
    description: "Private chef landing page built with Next.js.",
    image: demelo,
  },
  {
    id: 8,
    name: "Product Feedback",
    href: "https://feedback-dashboard-morfeli.vercel.app/",
    description:
      "A frontend mentor full stack web app built with Next.js, Next-Auth, Node.js and MongoDB.",
    image: feedback,
  },
  {
    id: 9,
    name: "Trattoria Il Cafone",
    href: "https://trattoriailcafone.com/",
    description: "Restaurant landing page built with Next.js.",
    image: trattoria,
  },
  {
    id: 10,
    name: "Travel Bud",
    href: "https://travel-bud-morfeli.vercel.app/",
    description:
      "A friendly user travel app. Allows users to locate nearby venues, save venues and leave a rating regarding their experience.",
    image: travel,
  },
  {
    id: 11,
    name: "Mello Bistro",
    href: "https://mellobistro.com/",
    description:
      "Landing page for Mello Bistro, an italian restaurant located in NJ.",
    image: bistro,
  },
  {
    id: 12,
    name: "Pyro Analytics",
    href: null,
    description: "False Idols NFT analytics dashboard.",
    image: pyro,
  },
  {
    id: 13,
    name: "Viajar Turismo",
    href: null,
    description: "Travel Agency company based in Brazil.",
    image: viajar,
  },
];

export const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="text-2xl">Projects</h2>
      <div className="grid gap-6 justify-items-center grid-cols-imageGrid md:grid-cols-imageGridMD">
        {projectArray.map((item, i) => (
          <ul>
            {item.image && (
              <ProjectCard
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                link={item.href}
                i={item.id}
              />
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};
