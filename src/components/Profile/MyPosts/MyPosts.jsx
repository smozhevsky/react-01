import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
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
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likeCount="5" />
        <Post message="It is my first post!" likeCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
