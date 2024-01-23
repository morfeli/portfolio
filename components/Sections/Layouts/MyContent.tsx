import Sections from "./Sections";

export const MyContent = () => {
  return (
    <main className="w-full overflow-hidden overflow-y-scroll text-white">
      <Sections.About />
      <Sections.Projects />
      <Sections.Contact />
    </main>
  );
};
