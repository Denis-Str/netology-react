import { useSelector, useDispatch } from "react-redux";
import { fetchServices, list, loading } from "../../redux/services";
import { errorMessage } from "../../redux/error";
import {memo, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Loader";
import ErrorView from "../ ErrorView";

export default memo(
  function ServicesList() {
    const dispatch = useDispatch();
    const services = useSelector(list) || [];
    const isLoading = useSelector(loading);
    const errMessage = useSelector(errorMessage);

    useEffect(() => {
      dispatch(fetchServices())
    }, [])

    if (errMessage) return <ErrorView request={fetchServices()} />
    if (isLoading) return <Loader/>
    else return (
      <ul>
        {services.map(({id, name, price}) =>
          <li key={id}>
            <NavLink to={`/${id}/details`}>{name} {price}</NavLink>
          </li>)
        }
      </ul>
    )
  }
)


