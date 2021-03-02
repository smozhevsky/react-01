import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

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
      <div className={classes.posts}>{props.items.map((p, index) => {
  return <Post message={p.message} likeCount={p.likesCount} key={index}/>;
})}</div>
    </div>
  );
};

export default MyPosts;
