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
      id={link}
      className={classNames(`flex flex-col p-8 ${styleProps} pt-24 lg:pt-8`)}
    >
      <h2 className="text-3xl">{link}</h2>
      <div>
        {children}
        {link !== "Contact" && <hr className="mt-8" />}
      </div>
    </section>
  );
};
