import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

let posts = [
  { id: 2, message: "How are you?", likesCount: 5 },
  { id: 3, message: "It is my first post!", likesCount: 11 },
];

const Profile = () => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts items={posts}/>
    </div>
  );
};

export default Profile;
