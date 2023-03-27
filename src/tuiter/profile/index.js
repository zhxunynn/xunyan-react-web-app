import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "./profileView";
import "./index.css";

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return <ProfileView key={profile._id} profile={profile[0]} />;
};

export default Profile;
