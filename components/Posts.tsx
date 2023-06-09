import { IPROPS_POST } from "@/utils/types.ts";
import Button from "@/islands/Like.tsx";

function Posts(props: IPROPS_POST) {
  return (
    <>
      {props.data?.map((post) =>
        props.data ? (
          <div class="card">
            <div class="card-title">
              <h2 class="title">{post.title}</h2>
            </div>
            <div class="card-body">
              <p class="body">{post.body}</p>
            </div>
            <div class="card-button">
              <Button />
            </div>
          </div>
        ) : (
          <h2 class="not-posts">no hay posts</h2>
        )
      )}
    </>
  );
}

export default Posts;
