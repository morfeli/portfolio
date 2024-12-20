import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/legacy/image";

type ProjectCardProps = {
  image: string;
  name: string;
  link?: string | null;
  desc: string;
};

export const ProjectCard = ({ image, name, link, desc }: ProjectCardProps) => {
  return (
    <motion.div className="flex flex-col items-center p-4 m-1 rounded-md w-[350px] relative text-center">
      <div>
        <Image
          src={image}
          alt="project"
          width={700}
          height={500}
          className="rounded-lg"
        />
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <div className="py-2 flex flex-col items-center hover:underline">
        {link ? (
          <a href={link} target="_blank" className="flex items-center">
            <p className="text-slate-200 rounded-lg flex items-center">View</p>
            <ArrowUpRight width={12} height={12} />
          </a>
        ) : (
          <p>Under Construction</p>
        )}
      </div>
    </motion.div>
  );
};
