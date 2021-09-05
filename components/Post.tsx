import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default Post;
