import { ProjectCard } from "./ProjectCard";
import { SectionLayout } from "../Layouts/SectionLayout";

const projectArray = [
  {
    id: 13,
    name: "Viajar Turismo",
    href: "https://viajar-turismo.vercel.app/",
    description:
      "Travel Agency company located in Brazil. Built with Next.js & TailwindCSS.",
    image: "/viajar.png",
  },

  {
    id: 10,
    name: "Travel Bud",
    href: "https://travel-bud-morfeli.vercel.app/",
    description:
      "A friendly user travel app. Users are able to locate nearby venues, save venues and post a rating regarding their experience. Built with Next.js, TailwindCSS, MongoDB & Node.js",
    image: "/travel.png",
  },
  {
    id: 8,
    name: "Product Feedback",
    href: "https://feedback-dashboard-morfeli.vercel.app/",
    description:
      "A Frontend Mentor challenge where users are able to signup/login and post on a public blog. A full stack web app built with Next.js, TailwindCSS, Next-Auth, MongoDB & Node.js",
    image: "/feedback.png",
  },
  {
    id: 6,
    name: "Audiophile E-Commerce",
    href: "https://audiophile-morfeli.vercel.app/",
    description:
      "A Frontend Mentor challenge. An e-commerce website built with Next.js & SCSS.",
    image: "/audiophile.png",
  },
  {
    id: 5,
    name: "Designo",
    description:
      "A Frontend Mentor challenge. A landing page for a creative agency built with React & SCSS.",
    href: "https://designo-morfeli.vercel.app/",
    image: "/designo.png",
  },
  {
    id: 4,
    name: "Planets",
    description:
      "A Frontend Mentor challenge. An informational landing page about the planets in our solar system. Built with Vanilla JS & SCSS.",
    href: "https://planets-morfeli.vercel.app/",
    image: "/planets.png",
  },

  {
    id: 11,
    name: "Mello Bistro",
    href: "https://mellobistro.com/",
    description:
      "Landing page for a clients restaurant. Built with Next.js & TailwindCSS.",
    image: "/bistro.png",
  },
  {
    id: 7,
    name: "Demelo Dining",
    href: "https://www.demelodining.com/",
    description:
      "Landing page for a clients business. Built with Next.js & TailwindCSS.",
    image: "/demelo.png",
  },

  {
    id: 9,
    name: "Trattoria Il Cafone",
    href: "https://trattoriailcafone.com/",
    description:
      "Landing page for a clients restaurant. Built with Next.js & TailwindCSS.",
    image: "/trattoria.png",
  },

  // {
  //   id: 12,
  //   name: "Pyro Analytics",
  //   href: null,
  //   description: "False Idols NFT analytics dashboard.",
  //   image: "/pyro.png",
  // },
];

export const Projects = () => {
  return (
    <SectionLayout link="Projects">
      <div className="grid gap-1 pt-4 justify-items-center grid-cols-repeatMin300px">
        {projectArray.map((item, i) => (
          <ul>
            <ProjectCard
              key={item.name}
              image={item.image}
              name={item.name}
              description={item.description}
              link={item.href}
            />
          </ul>
        ))}
      </div>
    </SectionLayout>
  );
};
