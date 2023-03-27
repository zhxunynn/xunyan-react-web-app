import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInformation } from "../reducers/profile-reducer";
import { Link } from "react-router-dom";

const EditProfileView = ({
  profile = {
    firstName: "Jose",
    lastName: "Annunziato",
    handle: "@jannunzi",
    profilePicture: "elon_musk.jpeg",
    bannerPicture: "polyglot.png",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 340,
    followersCount: 420,
  },
}) => {
  const [name, setName] = useState(profile.firstName + " " + profile.lastName);

  const nameChangeHandler = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const [bio, setBio] = useState(profile.bio);

  const bioChangeHandler = (event) => {
    const bio = event.target.value;
    setBio(bio);
  };

  const [location, setLocation] = useState(profile.location);

  const locationChangeHandler = (event) => {
    const location = event.target.value;
    setLocation(location);
  };

  const [website, setWebsite] = useState(profile.website);

  const websiteChangeHandler = (event) => {
    const website = event.target.value;
    setWebsite(website);
  };

  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

  const birthdateChangeHandler = (event) => {
    const birthdate = event.target.value;
    setDateOfBirth(birthdate);
  };

  const dispatch = useDispatch();

  const updateClickHandler = (profile) => {
    let names = name.split(" ");
    const newProfile = {
      ...profile,
      firstName: names[0],
      lastName: names[1],
      dateOfBirth: dateOfBirth,
      website: website,
      bio: bio,
      location: location,
    };
    dispatch(updateInformation(newProfile));
  };

  return (
    <div className={"wd-edit-profile"}>
      <div className="row ms-2">
        <div className={"col-1 ms-0 mt-3"}>
          <Link to={"/tuiter/profile"} className={"btn"}>
            <FontAwesomeIcon icon={faX} />
          </Link>
        </div>
        <div className={"col-9 ps-0"}>
          <h2>Edit Profile</h2>
        </div>
        <div className={"col-2 float-end"}>
          <Link
            to={"/tuiter/profile"}
            onClick={() => updateClickHandler(profile)}
            className={"btn btn-dark rounded-pill"}
          >
            Save
          </Link>
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
            alt={"Avatar"}
          />
        </div>
      </div>
      <div className={"row ms-3 mt-3 form-group"}>
        <label htmlFor={"name"}>Name</label>
        <input
          onChange={nameChangeHandler}
          id={"name"}
          className={"form-control"}
          value={name}
          required
        ></input>
      </div>
      <div className={"row ms-3 mt-3 form-group"}>
        <label htmlFor="bio">Bio</label>
        <textarea
          onChange={bioChangeHandler}
          id={"bio"}
          className={"form-control"}
          value={bio}
          rows={5}
          required
        ></textarea>
      </div>

      <div className={"row ms-3 mt-3 form-group"}>
        <label htmlFor="location">Location</label>
        <input
          onChange={locationChangeHandler}
          title={"Location"}
          id={"location"}
          className={"form-control"}
          value={location}
          required
        ></input>
      </div>

      <div className={"row ms-3 mt-3 form-group"}>
        <label htmlFor="website">Website</label>
        <input
          onChange={websiteChangeHandler}
          id={"website"}
          className={"form-control"}
          value={website}
        ></input>
      </div>

      <div className={"row ms-3 mt-3 form-group"}>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          onChange={birthdateChangeHandler}
          id={"dateOfBirth"}
          className={"form-control"}
          value={dateOfBirth}
        ></input>
      </div>
    </div>
  );
};

export default EditProfileView;
