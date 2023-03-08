import Sections from "./Sections";

export const MyContent = () => {
  return (
    <main className="w-full overflow-hidden overflow-y-scroll text-white">
      <Sections.About />
      <Sections.Teams />
      <Sections.Projects />
      <Sections.Blog />
      {/* <Sections.NFTs /> */}
      <Sections.Contact />
    </main>
  );
};
