import Head from "next/head";

import { Quicksand } from "@next/font/google";
import { Header } from "components/Header/Header";
import { MyContent } from "components/Sections/Layouts/MyContent";
import { useEffect } from "react";

const quicksand300 = Quicksand({ subsets: ["latin"], weight: "300" });
const quicksand400 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand500 = Quicksand({ subsets: ["latin"], weight: "500" });

export default function Home() {
  // useEffect(() => {
  //   let section = document.querySelectorAll("section");

  //   window.onscroll = () => {
  //     section.forEach((sec) => {
  //       let top = window.scrollY + 150;
  //       let offset = sec.offsetTop;
  //       let height = sec.offsetHeight;
  //       let id = sec.getAttribute("id");
  //       const target = document.getElementById(`navLink-${id}`);

  //       if (top >= offset && top < offset + height) {
  //         target!.style.backgroundColor = "#6c757d";
  //       } else {
  //         target!.style.backgroundColor = "";
  //       }
  //     });
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Felipe Moreira</title>
        <meta name="description" content="Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:flex lg:items-baseline">
        <Header />
        <MyContent />
      </div>
    </>
  );
}
