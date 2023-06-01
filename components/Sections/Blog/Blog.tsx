import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="p-4 mx-auto my-4 bg-gray-400 rounded-md shadow-xl sm:w-[350px]">
        <h1 className="text-lg">Redis... the in-memory database.</h1>
        <p className="py-2 text-sm">
          I break down the concepts into clear & concise chunks to get you
          started in building a high performace web application.
        </p>
        <p className="italic">Coming soon!</p>
      </div>
    </SectionLayout>
  );
};
