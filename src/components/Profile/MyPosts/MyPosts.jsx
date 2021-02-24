import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postData = [
    { id: 2, message: "How are you?", likesCount: 5 },
    { id: 3, message: "It is my first post!", likesCount: 11 },
  ];

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
        <Post
          message={postData[0].message}
          likeCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likeCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
