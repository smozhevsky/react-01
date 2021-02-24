import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likeCount="5" />
        <Post message="It is my first post!" likeCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
