import { getAllPostsIds, getPostData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import homeStyles from "@/styles/Home.module.css";

export default function post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  // [{params:{id:'pre.rendering'}, params:{id:'ssg-ssr'} }]
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params", params);
  // {id: 'ssg-ssr',}
  const postData = await getPostData(params?.id as string);
  return {
    props: { postData },
  };
};
