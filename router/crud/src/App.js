import {Routes, Route, useLocation} from "react-router";
import HomePage from "./pages/index";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/Post";
import {useEffect, useState} from "react";

function App() {
  const [posts, serPosts] = useState([]);
  let location = useLocation();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/posts`, {method: 'GET'});
      const posts = await response.json();
      serPosts([...posts]);
    } catch (e) {
      console.error('Ошибка получения списка постов', e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location]);

  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage posts={posts}/>}/>
          <Route path="posts">
            <Route path="new" exact element={<CreatePost/>}/>
            <Route path=":postId" exact element={<PostPage posts={posts} fetchPosts={fetchPosts}/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  )}

export default App;
