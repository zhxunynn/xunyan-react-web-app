import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TuitStatItem from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuititem = {} }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item b-0 bg-transparent">
      <div className="row align-top">
        <div className="col-1">
          <img
            src={`${tuititem.avatar}`}
            className="rounded-circle"
            width={40}
            alt="Avatar"
          />
        </div>

        <div className="col-10">
          <span>
            <b>{tuititem.username}</b>{" "}
            <FontAwesomeIcon
              className={"wd-twitter-button"}
              icon={faCheckCircle}
            />
          </span>{" "}
          <span className={"wd-time-handle-color"}>{tuititem.handle} ·</span>{" "}
          <span className={"wd-time-handle-color"}>{tuititem.time}</span>
          <br />
          <span>{tuititem.tuit}</span>
        </div>
        <div className="col-1">
          <i className="fa-solid fa-ellipsis pe-2"></i>
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuititem._id)}
          ></i>
        </div>
      </div>
      <TuitStatItem key={tuititem._id} tuititem={tuititem} />
    </li>
  );
};

export default TuitItem;
