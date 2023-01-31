import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

type ProjectCardProps = {
  image: StaticImageData;
  name: string;
  i: number;
  description: string;
  link?: string | null;
};

export const ProjectCard = ({
  image,
  name,
  i,
  description,
  link,
}: ProjectCardProps) => {
  const [flipCard, setFlipCard] = useState(false);

  function flipCardHandler() {
    setFlipCard((current) => !current);
  }

  function goBackHandler() {
    setFlipCard(false);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      className="m-2 w-80 h-96 perspective"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={classNames(
          "relative flex flex-col duration-1000 preserve-3d",
          {
            "rotate-y-180": flipCard,
          }
        )}
      >
        <div className="absolute z-50 w-full shadow-md backface-hidden shadow-indigo-500 ">
          <div
            className={classNames("flex flex-col rounded-md bg-slate-300", {
              "h-comingSoon": !image,
            })}
          >
            {image ? (
              <Image
                src={image}
                alt="image"
                width={325}
                height={300}
                className="rounded-tl-md rounded-tr-md bg-overLay"
                priority
              />
            ) : (
              <p>{name}... coming soon!</p>
            )}

            {image && (
              <button
                onClick={flipCardHandler}
                className="self-center px-4 py-2 m-2 tracking-wider text-center text-white uppercase rounded-lg bg-bottomBlue"
              >
                View more
              </button>
            )}
          </div>
        </div>

        <div className="w-full text-black shadow-md backface-hidden rotate-y-180 shadow-indigo-500">
          <div className="flex flex-col bg-white rounded-md justify-evenly h-backfaceHeight">
            <h1 className="self-center text-lg">{name}</h1>
            <p className="px-6 leading-8 text-center">{description}</p>
            <div className="flex self-center">
              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  <button className="self-center p-2 m-2 text-center bg-blue-200 rounded-lg">
                    Live Site
                  </button>
                </a>
              ) : (
                <div className="self-center p-2 m-2 text-center bg-blue-200 rounded-lg">
                  Coming Soon
                </div>
              )}

              <button
                onClick={goBackHandler}
                className="self-center p-2 m-2 text-center bg-blue-200 rounded-lg"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
