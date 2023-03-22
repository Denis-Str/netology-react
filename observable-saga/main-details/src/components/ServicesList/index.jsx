import { useSelector, useDispatch } from "react-redux";
import { fetchServices, list, loading } from "../../redux/services";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const services = useSelector(list) || [];
  const isLoading = useSelector(loading) || false;

  useEffect(() => {
    dispatch(fetchServices())
  }, [services.length === 0])

  return (
    <ul>
      {services.map(({id, name, price}) =>
        <li key={id}>
          <NavLink to={`/${id}/details`}>{name} {price}</NavLink>
        </li>)
      }
    </ul>
  )
}
