import Image from "next/image";

import { SectionLayout } from "./SectionLayout";

export const Teams = () => {
  return (
    <SectionLayout link="Teams">
      <h2 className="text-2xl">Teams</h2>

      <a href={"https://www.falseidols.xyz/"} target="_blank">
        <div className="flex items-center justify-between p-4 my-4 bg-gray-400 rounded-md">
          <div className="flex items-center ">
            <Image
              src="/false-idols-img.jpg"
              width={50}
              height={50}
              alt="False Idols Image"
              className="rounded-md"
            />
            <h2 className="ml-3">False Idols</h2>
          </div>
          <p className="text-sm">Frontend Engineer</p>
        </div>
      </a>
      <a href={"https://pedra.app/"} target="_blank">
        <div className="flex items-center justify-between p-4 my-4 bg-gray-400 rounded-md">
          <div className="flex items-center">
            <Image
              src="/pedra-img.png"
              width={50}
              height={50}
              alt="Pedra Image"
              className="rounded-md"
            />
            <h2 className="ml-3">Pedra</h2>
          </div>
          <p className="text-sm">Frontend Engineer</p>
        </div>
      </a>
    </SectionLayout>
  );
};
