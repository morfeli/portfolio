import Link from "next/link";

import classNames from "classnames";

const Twitter = () => {
  return (
    <Link href="https://twitter.com/morfelidev">
      <div className="flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer hover:bg-[#6c757d]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M2.367 3l7.096 10.14L2.74 21h2.64l5.265-6.17L14.96 21h6.91l-7.42-10.625L20.74 3h-2.6l-4.869 5.688L9.3 3H2.367zm3.84 2h2.049l9.777 14h-2.031L6.207 5z"></path>
        </svg>
      </div>
    </Link>
  );
};

export default Twitter;
