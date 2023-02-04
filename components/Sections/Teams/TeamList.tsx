import Image from "next/image";

type TeamListProps = {
  href: string;
  src: string;
  team: string;
  title: string;
};

export const TeamList = ({ href, src, team, title }: TeamListProps) => {
  return (
    <a href={href} target="_blank">
      <div className="flex items-center justify-between p-4 my-4 bg-gray-400 rounded-md lg:w-[30vw]">
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
    </a>
  );
};
