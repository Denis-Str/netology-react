import { useSelector, useDispatch } from "react-redux";
import { fetchResult, result, isLoading, error } from "./redux/search";

export default function App() {
  const resultList = useSelector(result) || [];
  const errorMessage = useSelector(error) || '';
  const loading = useSelector(isLoading) || false;
  const dispatch = useDispatch();
  const renderList = <ul>{resultList.map(({id, name}) => <li key={id}>{name}</li>)}</ul>;
  const loadingElem = <div className="loading">{loading && "loading..."}</div>;
  const errorElem = errorMessage && <h5>{errorMessage}</h5>;

  let searchResultElem;
  if (resultList.length) searchResultElem = renderList
  else searchResultElem =<ul><li>not results</li></ul>

  return (
    <>
      <input onChange={(event) => dispatch(fetchResult(event.target.value))} />
      {errorMessage ? errorElem : loading ? loadingElem : searchResultElem}
    </>
  )
}

