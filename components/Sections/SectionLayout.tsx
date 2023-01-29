type SectionLayoutProps = {
  link: string;
  children: React.ReactNode;
};

export const SectionLayout = ({ link, children }: SectionLayoutProps) => {
  return (
    <section id={`#${link}`} className="flex flex-col p-8">
      <div>
        {children}
        <hr className="mt-8" />
      </div>
    </section>
  );
};
