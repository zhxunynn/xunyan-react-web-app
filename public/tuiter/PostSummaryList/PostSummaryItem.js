
const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
          <div class="row align-items-start">
            <div class="col ms-2">
              <div class="row wd-font-default">${post.topic}</div>
              <div class="row overflow-hidden">
                <b class="col-auto p-0 overflow-hidden" style="max-width: 70%">${post.userName}</b>
                <div class="col-8 p-0">
                  <svg role="img" class="wd-follow-icon" data-testid="icon-verified"><g><path fill="#00aced" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>
                  <span class="wd-font-default d-inline"> ${post.time}</span>
                </div>
              </div>
              <div class="row overflow-hidden">
                <b class="col-auto p-0 overflow-hidden" style="max-width: 100%">${post.title}</b>
              </div>
            </div>
            <div class="col-auto align-self-center">
              <img class="rounded-1" style="width: 100px" src="${post.image}"/>
            </div>
          </div>
        </li>
    `)
}


export default PostSummaryItem;