const PostItem = (post) => {
    return (`
      <div class="row wd-flex-content-all align-items-start">
        <div class="col-auto" style="padding: 12px;">
          <img
            class="wd-flex-content-avatar rounded-circle"
            src="${post.avatar}"
          />
         </div>
        <div class="col p-0 me-2">
            <div class="wd-flex-content-title row align-items-start">
              <div class="overflow-hidden col-auto ps-0 pe-0" style="color:white">${post.UserName}</div>
              <div class="wd-flex-content-title-handle-date col-auto ps-0 pe-0">
                &nbsp@${post.handle} · ${post.time}
              </div>
              <div class="ms-auto col-1 me-2">
                 <svg class="wd-flex-content-title-icon">
                  <g>
                    <path
                      fill="gray"
                      d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                    ></path>
                  </g>
                </svg>           
              </div>
  
            </div>
            <div class="wd-flex-content-post row">
              ${post.content}
            </div>
            <div class="card wd-post-card bg-transparent row">
              <img src="${post.picture}" class="p-0" style="border-top-left-radius: 5%; border-top-right-radius: 5%; ${post.picture_title ? '' : 'border-radius:5%'}"/>
              <div id="wd-picture-content" style="${post.picture_title ? '' : 'display:none'}">
                <div class="wd-flex-content-article-title">
                  ${post.picture_title}
                </div>
                <p class="card-text wd-flex-content-article-content">${post.picture_content}</p>
              </div>
            </div>
            <div class="wd-flex-content-article-react row">
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component col-3">
              <i class="fa fa-comment" style="color:gray"></i>
                <div class="wd-flex-content-react-number">
                    ${post.discussion}
                </div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
                <i class="fas fa-retweet" style="color:gray"></i>
                <div class="wd-flex-content-react-number">${post.fwd}</div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
              <i class="fa fa-heart" style="color: rgb(249, 24, 128)"></i>
                <div
                  class="wd-flex-content-react-number"
                  style="color: rgb(249, 24, 128)"
                >
                  ${post.likes}
                </div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
                <i class="fa-solid fa-arrow-up-from-bracket" style="color:gray"></i>
              </div>
              </a>
            </div>
          </div>
      </div>
  `);
}


export default PostItem;