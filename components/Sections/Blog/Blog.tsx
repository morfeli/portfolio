import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="w-[400px] bg-gray-400 rounded-md p-4 my-4 mx-auto shadow-xl">
        <h1 className="text-xl">Redis... the in-memory database.</h1>
        <p className="py-2">
          I break down the concepts into clear concise chunks to get you started
          in building a high performace web application.
        </p>
        <p className="italic">Coming soon!</p>
      </div>
    </SectionLayout>
  );
};
