import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let posts = [
    { id: 2, message: "How are you?", likesCount: 5 },
    { id: 3, message: "It is my first post!", likesCount: 11 },
  ];

  let postsElements = posts.map((p) => {
    return <Post message={p.message} likeCount={p.likesCount} />;
  });

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
