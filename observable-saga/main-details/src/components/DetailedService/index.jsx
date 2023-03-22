import { useSelector, useDispatch } from "react-redux";
import { fetchDetailedService, detailed, loading } from "../../redux/detailedService";
import { errorMessage } from "../../redux/error";
import { useParams } from 'react-router-dom';
import {useEffect} from "react";
import Loader from "../Loader";

export default function DetailedService() {
  const dispatch = useDispatch();
  const { name, price, content } = useSelector(detailed) || {id: null};
  const isLoading = useSelector(loading) || false;
  const errMessage = useSelector(errorMessage);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailedService(id))
  }, [id === null]);

  if (errMessage) return <div>{errMessage}</div>
  if (isLoading) return <Loader/>
  else return (
    <div>
      <h4>{name}</h4>
      <div>{price}</div>
      <div>{content}</div>
    </div>
  )
}
