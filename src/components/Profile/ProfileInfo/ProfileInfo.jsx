import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          alt="image"
        />
      </div>
      <div className={classes.descriptionBlock}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
