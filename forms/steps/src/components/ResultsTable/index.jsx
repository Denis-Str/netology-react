import {arrayOf} from "prop-types";
import ResultModel from "../../models/ResultModel";
import Result from "./Result";

export default function ResultsTable({results}) {
  console.log(results)
  // const resultsList = results.map((result, index) => <Result key={`result ${index}`} result={result} />)
  return(
    <ul className="results-table-component">
      <li className="headline">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено, км</div>
      </li>
      {/*{resultsList}*/}
    </ul>
  )
}

ResultsTable.defaultProp = {
  results: arrayOf(ResultModel)
}
