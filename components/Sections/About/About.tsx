import { SectionLayout } from "../Layouts/SectionLayout";

export const About = () => {
  return (
    <SectionLayout link="About">
      <p className="py-4 text-lg text-left xl:w-[750px] lg:mx-auto md:px-20">
        I’m an engineer who builds robust and secure web applications by
        leveraging cutting-edge technology.
      </p>
    </SectionLayout>
  );
};
