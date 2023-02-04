import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log(link);
    }
  }, [link, inView]);
  return (
    <section
      id={link}
      className={classNames(`flex flex-col p-8 ${styleProps}`)}
    >
      <h2 className="text-2xl" ref={ref}>
        {link}
      </h2>
      <div>
        {children}
        {link !== "Contact" && <hr className="mt-8" />}
      </div>
    </section>
  );
};
