import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add new post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.posts.map((p, index) => {
          return (
            <Post message={p.message} likeCount={p.likesCount} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
