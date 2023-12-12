import { SectionLayout } from "../Layouts/SectionLayout";

export const Blog = () => {
  return (
    <SectionLayout link="Blog">
      <div className="py-4 grid grid-cols-blogGrid justify-items-center gap-4">
        <div className="p-4 my-2 bg-gray-400 rounded-md shadow-xl flex flex-col justify-center">
          Updating...
        </div>
      </div>
    </SectionLayout>
  );
};
