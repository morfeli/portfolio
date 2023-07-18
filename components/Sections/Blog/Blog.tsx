import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="p-4 mx-auto my-4 bg-gray-400 rounded-md shadow-xl sm:w-[350px]">
        <a href="https://medium.com/@morfelidev/speed-durable-and-high-performant-its-redis-5d503711a6f5">
          <h1 className="text-lg underline">
            Redis... the in-memory database.
          </h1>
        </a>
        <p className="py-2 text-sm">
          I break down the concepts into clear & concise chunks to get you
          started in building a high performace web application.
        </p>
        <p className="italic">July 10, 2023</p>
      </div>
    </SectionLayout>
  );
};
