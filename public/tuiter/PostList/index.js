import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return `
      <ul class="list-group mt-1" style="padding: 0 12px 0 12px;">
            ${posts
        .map((post) => {
            return PostItem(post);
        })
        .join("")}
      </ul>
`;
}

export default PostList;
$("#wd-post-list-index").html(PostList());
