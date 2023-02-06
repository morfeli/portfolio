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
      className={classNames(`flex flex-col p-8 ${styleProps} lg:py-6`)}
    >
      <div>
        <h2 className="text-3xl">{link}</h2>
        {children}
        {link !== "Contact" && <hr className="mt-4" />}
      </div>
    </section>
  );
};
