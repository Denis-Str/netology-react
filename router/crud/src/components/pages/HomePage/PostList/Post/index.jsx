import {Link} from "react-router-dom";

export default function Post({post}) {
  const date = new Date(post.created);
  return (
    <div className="post-comp _bg-common ">
      <Link to={`/posts/${post.id}`} className="link">
        <h4>{post.comment}</h4>
        <div>{date.toDateString()}</div>
      </Link>
    </div>
  )
}