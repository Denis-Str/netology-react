import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

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
      <NavLink to={"/posts/new"} className="new-post">Создать пост</NavLink>
      <h3>HomePage</h3>
    </div>
  )
}
