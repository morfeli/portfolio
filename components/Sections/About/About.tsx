import { SectionLayout } from "../Layouts/SectionLayout";

export const About = () => {
  return (
    <SectionLayout link="About">
      <p className="py-6 text-lg  text-center leading-8 xl:w-[750px] lg:mx-auto md:px-20">
        I am a Frontend Engineer located in Miami, FL. I'm driven by my passion
        to deliver exceptional user experiences and write clean code. I thrive
        in collaborative environments where I can work alongside like-minded
        individuals who share the same dedication and vision.
      </p>

      <p className="text-sm text-left w-[290px] mx-auto">
        “Do not jump to any conclusions about your own capabilities. You are
        fine - just keep at.” -Elouqent Javascript by Marijn Haverbeke
      </p>
    </SectionLayout>
  );
};
