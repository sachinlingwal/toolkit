import React from "react";
import { useSelector } from "react-redux";
import PostAuther from "./PostAuther";
import { selectAllPosts } from "./postSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  //sort the list
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // const renderedPosts = posts.map((post) => (
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} style={{ border: "1px solid red" }}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuther userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostLists;
