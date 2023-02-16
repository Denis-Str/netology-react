/**
 *  Компонент поискового запроса, содержит компоненты
 */
import AppLogo from "../../../general/AppLogo";
import AppLink from "../../../general/AppLink";
import SearchField from "./SearchField";
import HintView from "./HintView";

export default function SearchBar() {
  return (
    <div>
      <AppLogo />
      <div className="search-line">
        <div className="links"><AppLink/></div>
        <SearchField />
        <HintView />
      </div>
    </div>
  )
}
