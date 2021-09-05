import React from "react";
import prisma from "lib/prisma";
import { GetStaticProps } from "next";

import Post from "@components/Post";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log(feed);
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <h1>Public Feed</h1>
      <main>
        {props.feed.map((post) => {
          console.log(1);
          return <Post post={post} />;
        })}
      </main>
    </div>
  );
};

export default Blog;
