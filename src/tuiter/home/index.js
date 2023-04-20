import React from "react";
import HomeComponentPostArray from "./HomeComponentPosts.json";
import HomeComponentItem from "./home-component-item";

const HomeComponentList = () => {
  return (
    <ul className="list-group">
      {HomeComponentPostArray.map((post) => (
        <HomeComponentItem key={post.UserName} HomeComponentPost={post} />
      ))}
    </ul>
  );
};

export default HomeComponentList;
