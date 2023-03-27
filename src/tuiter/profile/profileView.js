import React from "react";
import {
  faLink,
  faLocationDot,
  faCakeCandles,
  faCalendarDays,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProfileView = ({ profile = {} }) => {
  return (
    <>
      <div className="row ms-2">
        <div className={"col-1 ms-0 mt-2"}>
          <FontAwesomeIcon icon={faLongArrowLeft} />
        </div>
        <div className={"col-11 ps-0"}>
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>
          <span style={{ color: "grey" }}>6,224 Tweets</span>
        </div>
      </div>
      <div className={"row"}>
        <img src={`${profile.bannerPicture}`} alt={"Banner"} />
      </div>
      <div className={"row"}>
        <div className={"ms-3"}>
          <img
            className={"wd-profile-avatar"}
            src={`${profile.profilePicture}`}
            alt={"Banner"}
          />
          <Link
            to={"/tuiter/edit-profile/"}
            className="mt-2 me-4 btn btn-outline-light text-dark border-dark fw-bolder rounded-pill float-end"
          >
            Edit profile
          </Link>
        </div>
      </div>
      <div className={"row"}>
        <h3 className={"fw-bolder ms-3 mb-0 mt-4"}>
          {profile.firstName} {profile.lastName}
        </h3>
        <p className={"ms-3 mt-0"} style={{ color: "gray" }}>
          {profile.handle}
        </p>
      </div>
      <div className={"row mt-2"}>
        <span className={"ms-3 mt-0"}>{profile.bio}</span>
      </div>
      <div className={"row mt-3"}>
        <div className={"col-auto"}>
          <a
            className={"ms-3"}
            style={{ color: "blue", textDecoration: "none" }}
            href={"https://" + profile.website}
          >
            <FontAwesomeIcon icon={faLink} /> {profile.website}
          </a>
        </div>
        <div className={"col-auto"}>
          <span className={"ms-3"} style={{ color: "gray" }}>
            <FontAwesomeIcon icon={faLocationDot} /> {profile.location}
          </span>
        </div>
        <div className={"col-auto"}>
          <FontAwesomeIcon icon={faCakeCandles} />{" "}
          <span style={{ color: "gray" }}>{profile.dateOfBirth}</span>
        </div>
        <div className={"col-auto"}>
          <span style={{ color: "gray" }}>
            <FontAwesomeIcon icon={faCalendarDays} /> Joined{" "}
            {profile.dateJoined}
          </span>
        </div>
      </div>

      <div className={"row mt-3 ms-3 "}>
        <div className={"col-auto p-0"}>
          <span className={"fw-bolder"}>{profile.followingCount}</span>{" "}
          <span style={{ color: "gray" }}> Following</span>
        </div>
        <div className={"col-auto p-0 ms-3"}>
          <span className={"ms-3 fw-bolder"}>{profile.followersCount}</span>{" "}
          <span style={{ color: "gray" }}> Followers</span>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
