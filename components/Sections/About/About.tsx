import { SectionLayout } from "../Layouts/SectionLayout";

export const About = () => {
  return (
    <SectionLayout link="About">
      <p className="py-6 text-lg leading-8 lg:w-[750px] lg:text-center lg:mx-auto">
        I'm a Frontend Engineer based in Miami, FL. I'm passionate in providing
        a phenomenal user experience, clean code, and working within a team of
        likeminded individuals.
      </p>

      <p className="mx-auto w-80">
        “Do not jump to any conclusions about your own capabilities. You are
        fine - just keep at.” -Elouqent Javascript by Marijn Haverbeke
      </p>
    </SectionLayout>
  );
};
