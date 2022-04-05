import React from "react";
import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "💖",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const ReactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionsAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{ReactionButtons}</div>;
};

export default ReactionButton;
