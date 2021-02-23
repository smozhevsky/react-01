import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/08/79018e198b52c9139fcf59adcfb7865f.jpg" />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
