import {arrayOf} from "prop-types";
import ResultModel from "../../models/ResultModel";
import Result from "./Result";

export default function ResultsTable({results, onHandleClickResult}) {
  let resultsList = <div>Добавьте результаты тренировок</div>
  if (results.length > 0) {
    resultsList = (
      <ul className="results-list">
        {results.map((result, index) =>
          <Result
            key={`result ${index}`}
            result={result}
            onHandleClickResult={onHandleClickResult}
          />)}
      </ul>
    )
  }
  return (
    <div className="results-table-component">
      <div className="headline">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено, км</div>
        <div>Действия</div>
      </div>
      {resultsList}
    </div>
  )
}

ResultsTable.defaultProp = {
  results: arrayOf(ResultModel)
}
