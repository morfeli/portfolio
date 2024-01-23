import { SectionLayout } from "../Layouts/SectionLayout";
import StorysetSVG from "./StorysetSVG";

export const Contact = () => {
  return (
    <SectionLayout link="Contact">
      <div className="py-4 text-lg  text-left xl:w-[750px] lg:mx-auto">
        <p>
          Feel free to contact me in regards to any serious work opportunities.
          I'm open to collab on new & exisiting projects that I find
          interesting.
        </p>
        <p className="my-4">Visit my social links to connect with me.</p>
        <StorysetSVG />
      </div>
    </SectionLayout>
  );
};
