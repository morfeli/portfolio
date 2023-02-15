import { SectionLayout } from "../Layouts/SectionLayout";

export const About = () => {
  return (
    <SectionLayout link="About">
      <p className="py-6 text-lg  text-center leading-8 xl:w-[750px] lg:mx-auto md:px-20">
        I'm a Frontend Engineer based in Miami, FL. I'm passionate in providing
        a phenomenal user experience, clean code, and working within a team of
        likeminded individuals.
      </p>

      <p className="text-sm text-left w-[290px] mx-auto">
        “Do not jump to any conclusions about your own capabilities. You are
        fine - just keep at.” -Elouqent Javascript by Marijn Haverbeke
      </p>
    </SectionLayout>
  );
};
