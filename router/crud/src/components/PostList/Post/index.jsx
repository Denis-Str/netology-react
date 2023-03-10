export default function Post({post}) {
  const date = new Date(post.created);
  return (
    <div className="post-comp">
      <h4>{post.comment}</h4>
      <div>{date.toDateString()}</div>
    </div>
  )
}