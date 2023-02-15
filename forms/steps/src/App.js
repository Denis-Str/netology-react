import FormView from "./components/FormView";
import ResultsTable from "./components/ResultsTable";
import {useState} from "react";

export default function App() {
  let [results, setResults] = useState([]);
  const onAddResult = (result) => {
    setResults(prevState => [...prevState, result]);
  }
  const editResult = ({date, distance}) => {
    const updateResults = results.map(item => {
      if (item.date === date) return {...item, distance: +item.distance + +distance};
      return item;
    })
    setResults(updateResults);
  }
  const deleteResult = result => {
    setResults(results.filter(({date}) => date !== result.date));
  }
  const onHandleClickResult = ({key, result}) => {
    if (key === 'edit') editResult(result)
    else deleteResult(result)
  }

  return (
    <div className="wrap">
      <div className="container">
        <FormView onAddResult={onAddResult}/>
        <ResultsTable results={results} onHandleClickResult={onHandleClickResult}/>
      </div>
    </div>);
}

