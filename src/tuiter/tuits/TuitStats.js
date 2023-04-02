import {
  faHeart,
  faRetweet,
  faShareNodes,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faComment,
  faHeart as regularHeart,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { todoLikeToggle } from "./tuits-reducer";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({
  tuititem = {
    _id: "123",
    topic: "Space",
    userName: "SpaceX",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    time: "2h",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    dislikes: 123,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars. You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
    image: "tesla.jpeg",
  },
}) => {
  const dispatch = useDispatch();
  const toggleLike = (tuitStat) => {
    dispatch(todoLikeToggle(tuitStat));
  };
  return (
    <>
      <div className="row ms-5 mt-3">
        <span className="col-3">
          <a>
            <FontAwesomeIcon color={"darkgray"} icon={faComment} />
          </a>
          <span> {tuititem.replies}</span>
        </span>
        <span className="col-3">
          <a>
            <FontAwesomeIcon color={"darkgray"} icon={faRetweet} />
          </a>
          <span> {tuititem.retuits}</span>
        </span>
        <span className="col-3">
          <i
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuititem,
                  likes: tuititem.likes + 1,
                })
              )
            }
            className="bi bi-heart-fill me-2 text-danger"
          ></i>
          {tuititem.likes}
        </span>
        <span className="col">
          <a
            onClick={() => {
              dispatch(
                updateTuitThunk({
                  ...tuititem,
                  dislikes: tuititem.dislikes + 1,
                })
              );
            }}
          >
            <FontAwesomeIcon color={"darkgray"} icon={faThumbsDown} />
          </a>
          <span> {tuititem.dislikes}</span>
        </span>
      </div>
    </>
  );
};

export default TuitItem;
