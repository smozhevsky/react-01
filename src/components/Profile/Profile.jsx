import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          alt="image"
        />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
