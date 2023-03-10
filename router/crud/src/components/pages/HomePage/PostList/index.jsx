import Post from "./Post";

export default function PostList({posts}) {
  if (posts.length === 0) return (<div className="posts-list">Нет постов</div>);
  const list = posts.map(post => <Post key={post.id} post={post}></Post>)
  return (
    <div className="posts-list">{list}</div>
  )
}