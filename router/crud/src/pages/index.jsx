import {NavLink} from "react-router-dom";
import PostList from "../components/pages/HomePage/PostList";

export default function HomePage({posts}) {
  return (
    <div className="home-page-comp">
      <div className="new-post _bg-common">
        <NavLink to={"/posts/new"} className="link">Создать пост</NavLink>
      </div>
      <PostList posts={posts} />
    </div>
  )
}
