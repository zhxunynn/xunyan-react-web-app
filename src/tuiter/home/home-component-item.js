import React from "react";
import "./index.css";

const HomeComponentItem = ({ HomeComponentPost = {} }) => {
  return (
    <div className="row wd-flex-content-all align-items-start">
      <div className="col-auto" style={{ padding: "12px" }}>
        <img
          className="wd-flex-content-avatar rounded-circle"
          src={HomeComponentPost.avatar}
          alt="avatar of the user"
        />
      </div>
      <div className="col p-0 me-2">
        <div className="wd-flex-content-title row align-items-start">
          <div
            className="overflow-hidden col-auto ps-0 pe-0"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {HomeComponentPost.UserName}
            <svg style={{ width: "24px", height: "24px" }}>
              <g>
                <path
                  fill="rgb(30,144,233)"
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="wd-flex-content-title-handle-date col-auto ps-0 pe-0">
            @{HomeComponentPost.handle} · {HomeComponentPost.time}
          </div>
          <div className="ms-auto col-1 me-2">
            <svg className="wd-flex-icon">
              <g>
                <path
                  fill="gray"
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="wd-flex-content-post row" style={{ color: "black" }}>
          {HomeComponentPost.content}
        </div>
        <div
          className="card wd-post-card bg-transparent row"
          style={{ marginLeft: "0" }}
        >
          <img
            src={HomeComponentPost.picture}
            className="p-0 wd-card-picture-style"
          />
          <div
            id="wd-picture-content"
            style={HomeComponentPost.picture_title ? {} : { display: "none" }}
          >
            <div
              className="wd-flex-content-article-title"
              style={
                HomeComponentPost.picture_title
                  ? {
                      borderTopLeftRadius: "5%",
                      borderTopRightRadius: "5%",
                      color: "Black",
                    }
                  : { borderRadius: "5%", color: "Black" }
              }
            >
              {HomeComponentPost.picture_title}
            </div>
            <p className="card-text wd-flex-content-article-content">
              {HomeComponentPost.picture_content}
            </p>
          </div>
        </div>
        <div className="wd-flex-content-article-react row">
          <a href="#" style={{ textDecoration: "none" }} className="col-3 p-0">
            <div className="wd-flex-content-react-component col-3">
              <i className="bi bi-chat" style={{ color: "gray" }}></i>
              <div className="wd-flex-content-react-number">
                {HomeComponentPost.discussion}
              </div>
            </div>
          </a>
          <a href="#" style={{ textDecoration: "none" }} className="col-3 p-0">
            <div className="wd-flex-content-react-component">
              <i className="bi bi-repeat " style={{ color: "gray" }}></i>
              <div className="wd-flex-content-react-number">
                {HomeComponentPost.fwd}
              </div>
            </div>
          </a>
          <a href="#" style={{ textDecoration: "none" }} className="col-3 p-0">
            <div className="wd-flex-content-react-component">
              <i className="bi bi-heart text-secondary"></i>
              <div className="wd-flex-content-react-number">
                {HomeComponentPost.likes}
              </div>
            </div>
          </a>
          <a href="#" style={{ textDecoration: "none" }} className="col-3 p-0">
            <div className="wd-flex-content-react-component">
              <i className="bi bi-upload" style={{ color: "gray" }}></i>
            </div>
          </a>
        </div>
        <div
          className="wd-thread-style row"
          style={HomeComponentPost.show_thread ? {} : { display: "none" }}
        >
          Show the thread
        </div>
      </div>
    </div>
  );
};

export default HomeComponentItem;
