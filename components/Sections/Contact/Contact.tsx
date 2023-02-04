import { SectionLayout } from "../Layouts/SectionLayout";
import Form from "./Form";
import StorysetSVG from "./StorysetSVG";

export const Contact = () => {
  return (
    <SectionLayout link="Contact">
      <div className="md:flex md:items-end md:justify-evenly">
        <Form />
        <StorysetSVG />
      </div>
    </SectionLayout>
  );
};
