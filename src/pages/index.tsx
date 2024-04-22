import Head from "next/head";

import { Header } from "components/Header/Header";
import { MyContent } from "components/Sections/Layouts/MyContent";

export default function Home() {
  return (
    <>
      <div className="lg:flex lg:items-baseline">
        <Header />
        <MyContent />
      </div>
    </>
  );
}
