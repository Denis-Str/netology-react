import { useSelector, useDispatch } from "react-redux";
import { fetchDetailedService, detailed, loading } from "../../redux/detailedService";
import { useParams } from 'react-router-dom';
import {useEffect} from "react";

export default function DetailedService() {
  const dispatch = useDispatch();
  const { name, price, content } = useSelector(detailed) || {id: null};
  const isLoading = useSelector(loading) || false;
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailedService(id))
  }, [id === null])

  return (
    <div>
      <h4>{name}</h4>
      <div>{price}</div>
      <div>{content}</div>
    </div>
  )
}
