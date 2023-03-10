import { useParams, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import Content from "../components/pages/Post/Content";
import Edit from "../components/pages/Post/Edit";

export default function PostPage({posts, fetchPosts}) {
  const [isEdit, setIsEdit]= useState(false);
  let { postId } = useParams();
  const navigate = useNavigate();

  const deletePost = async () => {
    await fetch(`${process.env.REACT_APP_URL}/posts/${postId}`, {
      method: "DELETE"
    });
    navigate("/");
  }

  const savePost = async comment => {
    const params = { id: +postId, comment:`${comment}` }
    const body = JSON.stringify(params);
    await fetch(`${process.env.REACT_APP_URL}/posts`, {
      method: "POST",
      body
    });
    setIsEdit(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [isEdit]);

  const closePage = () => {
    setIsEdit(false);
  };

  if (posts.length) {
    const post = posts.find(({id}) => id === +postId);

    return (
      <div className="post-page-comp _bg-common">
        <div className="heading">
          <span className="material-icons" onClick={() => navigate("/")}>arrow_back</span>
        </div>
        {
          isEdit ?
          <Edit comment={post.comment} editPost={savePost} closePage={closePage} /> :
          <Content post={post} setIsEdit={setIsEdit} deletePost={deletePost} />
        }
      </div>
    )
  }
  return <></>;
}