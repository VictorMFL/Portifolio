// Components
import Header from "@/components/Header";
import Main from "@/components/Main";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MyProjects from "@/components/MyProjects";
import Footer from "@/components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio</title>
        <meta name="description" content="Meu Portifólio principal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Main>
        <About />
        <Experience />
        <Skills />
        <MyProjects />
        <Footer />
      </Main>
    </>
  );
}
