import { Twitter, Discord, Github } from "./UI/SocialLinks";
import { MobileBtn } from "./UI/MobileBtn";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 text-white border-b-2 border-b-white">
      <h2 className="text-lg">@morfelidev</h2>
      <div className="flex">
        <div className="flex items-center justify-between mr-4 w-28">
          <Discord />
          <Github />
          <Twitter />
        </div>
        <MobileBtn />
      </div>
    </header>
  );
};
