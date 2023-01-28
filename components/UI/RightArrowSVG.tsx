import { motion } from "framer-motion";

type RightArrowSVGProps = {
  hoverEffect: boolean;
  name: string;
  activeTab?: string;
};

const RightArrowSVG = ({
  hoverEffect,
  activeTab,
  name,
}: RightArrowSVGProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-4 h-4 scale-75 right-10"
      fill="white"
      version="1.1"
      viewBox="0 0 512.005 512.005"
      xmlSpace="preserve"
      animate={hoverEffect && activeTab !== name ? { x: 5 } : { x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <path d="M388.418 240.923L153.751 6.256c-8.341-8.341-21.824-8.341-30.165 0s-8.341 21.824 0 30.165L343.17 256.005 123.586 475.589c-8.341 8.341-8.341 21.824 0 30.165a21.275 21.275 0 0015.083 6.251 21.277 21.277 0 0015.083-6.251l234.667-234.667c8.34-8.34 8.34-21.823-.001-30.164z"></path>
    </motion.svg>
  );
};

export default RightArrowSVG;
