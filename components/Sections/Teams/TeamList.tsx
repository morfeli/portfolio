import Image from "next/image";
import { motion } from "framer-motion";

type TeamListProps = {
  href: string;
  src: string;
  team: string;
  title: string;
};

export const TeamList = ({ href, src, team, title }: TeamListProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between p-4 my-2 bg-gray-400 rounded-md lg:w-[30vw]">
        <div className="flex items-center ">
          <Image
            src={src}
            width={50}
            height={50}
            alt="False Idols Image"
            className="rounded-md"
          />
          <h2 className="ml-3">{team}</h2>
        </div>
        <p className="text-sm">{title}</p>
      </div>
    </motion.a>
  );
};
