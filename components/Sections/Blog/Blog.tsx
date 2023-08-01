import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="p-4 mx-auto my-4 bg-gray-400 rounded-md shadow-xl sm:w-[350px]">
        <a href="https://medium.com/@morfelidev/speed-durable-and-high-performant-its-redis-5d503711a6f5">
          <h1 className="text-lg underline">
            Speed, Durable and High Performant. It's Redis!
          </h1>
        </a>
        <p className="py-2 text-sm">
          A warm intro on Redis and its elegant features.
        </p>
        <p className="italic">July 10, 2023</p>
      </div>
    </SectionLayout>
  );
};
