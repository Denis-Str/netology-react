import { useParams, useNavigate } from 'react-router-dom';

export default function PostPage({posts}) {
  let { postId } = useParams();
  const navigate = useNavigate();


  const deletePost = async () => {
    await fetch(`${process.env.REACT_APP_URL}/posts/${postId}`, {
      method: "DELETE"
    });
    navigate("/");
  }

  if (posts.length) {
    const {comment, created} = posts.find(({id}) => id === +postId);
    const date = new Date(created);

    return (
      <div className="post-page-comp _bg-common">
        <h3>{comment}</h3>
        <h5>{date.toDateString()}</h5>
        <div className="deliver" />
        <div className="wrap">
          <div role="button" className="button">Изменить</div>
          <div role="button" className="button" onClick={() => deletePost()}>Удалить</div>
        </div>
      </div>
    )
  }
  return <></>;
}