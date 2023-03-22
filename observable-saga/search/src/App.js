import {useSelector, useDispatch} from "react-redux";
import {fetchResult, result, isLoading, error} from "./redux/search";
import debounce from "./helpers/debounce";

export default function App() {
  const resultList = useSelector(result) || [];
  const errorMessage = useSelector(error) || '';
  const loading = useSelector(isLoading) || false;
  const dispatch = useDispatch();

  const handlerChange = debounce(value => {
    dispatch(fetchResult(value));
  }, 500)

  const listElem = <ul>{resultList.map(({id, name}) => <li key={id}>{name}</li>)}</ul>;
  const loadingElem = <div className="loading">{loading && "loading..."}</div>;
  const errorElem = errorMessage && <h5>{errorMessage}</h5>;

  let searchResultElem = resultList.length ? listElem : <ul><li>not results</li></ul>;

  return (
    <>
      <input onChange={(event) => handlerChange(event.target.value)}/>
      {loading ?  loadingElem  : errorMessage ? errorElem : searchResultElem}
    </>
  )
}

