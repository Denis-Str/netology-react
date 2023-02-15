import {arrayOf} from "prop-types";
import ResultModel from "../../models/ResultModel";
import Result from "./Result";

export default function ResultsTable({results, onHandleClickResult}) {
  if (results.length > 0) {
    const resultsList = results.map((result, index) =>
      <Result
        key={`result ${index}`}
        result={result}
        onHandleClickResult={onHandleClickResult}
      />)
    return (
      <div className="results-table-component">
        <ul className="results-list">
          {resultsList}
        </ul>
      </div>
    )
  }
  return (<div>Добавьте результат тренировки</div>);
}

ResultsTable.defaultProp = {
  results: arrayOf(ResultModel)
}
