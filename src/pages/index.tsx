import Head from "next/head";

import { Header } from "components/Header/Header";
import { MyContent } from "components/Sections/Layouts/MyContent";

export default function Home() {
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
