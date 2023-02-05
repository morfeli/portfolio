import classNames from "classnames";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const [active, setActive] = useState<string>("");
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setActive(link);
    }
  }, [inView, link]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section
      id={link}
      className={classNames(`flex flex-col p-8 ${styleProps} pt-24 lg:pt-8`)}
      ref={ref}
    >
      <h2 className="text-2xl">{link}</h2>
      <div>
        {children}
        {link !== "Contact" && <hr className="mt-8" />}
      </div>
    </section>
  );
};

// const links = document.getElementById("navLink-Projects");
// const navLink = document.getElementById("navLink-Contact");
// if (inView) {
//   navLink!.style.backgroundColor = "#6c757d";
//   links!.style.backgroundColor = "#343a40";
// } else {
//   navLink!.style.backgroundColor = "";
//   links!.style.backgroundColor = "";
