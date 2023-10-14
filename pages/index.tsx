import Head from "next/head";
import { Inter } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "@/lib/posts";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = ({
  allPostsData: {
    allPostsData: { title: string, date: string, id: string },
  }[],
}) => {
  return (
    <>
      <Head>
        <title>Bbang app</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>Bbang Introduction</p>
        <p>(this is WebSite)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    prop: { allPostsData },
  };
};
