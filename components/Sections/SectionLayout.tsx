import classNames from "classnames";

type SectionLayoutProps = {
  link: string;
  children: React.ReactNode;
  styleProps?: string;
};

export const SectionLayout = ({
  link,
  children,
  styleProps,
}: SectionLayoutProps) => {
  return (
    <section
      id={`#${link}`}
      className={classNames(`flex flex-col p-8 ${styleProps}`)}
    >
      <div>
        {children}
        <hr className="mt-8" />
      </div>
    </section>
  );
};
