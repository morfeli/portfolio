import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="py-4 grid grid-cols-blogGrid justify-items-center gap-4">
        <div className="p-4 my-2 bg-gray-400 rounded-md shadow-xl flex flex-col justify-center">
          <a href="https://medium.com/@morfelidev/speed-durable-and-high-performant-its-redis-5d503711a6f5">
            <h2 className="text-lg underline text-center">
              Speed, Durable and High Performant. It's Redis!
            </h2>
          </a>
          <p className="py-2 text-sm text-center">
            A warm intro on Redis and its elegant features.
          </p>
          <p className="italic text-right">July 10, 2023</p>
        </div>
        <div className="p-4 my-2 bg-gray-400 rounded-md shadow-xl flex flex-col justify-center text-center">
          <a href="https://medium.com/@morfelidev/the-art-of-polyglot-coding-267b413d50ae">
            <h2 className="text-lg underline">The Art of Polygot Coding</h2>
          </a>
          <p className="py-2 text-sm">
            Explore beyond from what you know, discovering a new journey.
          </p>
          <p className="italic text-right">July 10, 2023</p>
        </div>
      </div>
    </SectionLayout>
  );
};
