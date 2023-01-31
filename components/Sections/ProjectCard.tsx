import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  image: string;
  name: string;

  description: string;
  link?: string | null;
};

export const ProjectCard = ({
  image,
  name,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div className="flex flex-col items-center p-4 m-2 rounded-md w-[325px] relative text-center">
      <img src={image} alt="project" className="w-full rounded-lg h-72" />
      <div className="py-4">
        <p className="pb-2">{name}</p>
        <p className="pb-2">{description}</p>
        {link ? (
          <a href={link} target="_blank">
            <button className="p-2 mt-2 text-black bg-gray-200 rounded-md">
              Live Site
            </button>
          </a>
        ) : (
          <p>Coming soon</p>
        )}
      </div>
    </motion.div>
  );
};
