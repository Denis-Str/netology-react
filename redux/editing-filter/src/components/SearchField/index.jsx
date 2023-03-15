import { useSelector, useDispatch } from "react-redux";
import { searchValue, changeSearchValue } from "../../redux/searchService";

export default function SearchField() {
  const inputValue = useSelector(searchValue);
  const dispatch = useDispatch();
  const handleChangeValue = value => dispatch(changeSearchValue(value));

  return (
    <div>
      <div>Поиск значения</div>
      <input
        placeholder="Search"
        value={inputValue}
        onChange={event => handleChangeValue(event.target.value)}
      />
    </div>
  )
}
