import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import PostList from "../components/PostList";

export default function HomePage() {
  const [posts, serPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/posts`, {method: 'GET'});
      const posts = await response.json();
      serPosts([...posts]);
    } catch (e) {
      console.error('Ошибка получения списка постов', e);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, [posts.length === 0]);
  return (
    <div className="home-page-comp">
      <div className="new-post">
        <NavLink to={"/posts/new"} className="link">Создать пост</NavLink>
      </div>
      <PostList posts={posts} />
    </div>
  )
}
