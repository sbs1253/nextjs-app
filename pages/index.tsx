import Head from "next/head";
import { Inter } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import PostStyles from "../styles/Post.module.css";

export default function Home({
  allPostsData,
}: {
  allPostsData: { title: string; date: string; id: string }[];
}) {
  return (
    <div className={PostStyles.container}>
      <Head>
        <title>Bbang app</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>Bbang Introduction</p>
        <p>(this is WebSite)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a>{title}</a>
              </Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
};
