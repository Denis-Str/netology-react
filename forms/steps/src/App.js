import FormView from "./components/FormView";
import ResultsTable from "./components/ResultsTable";
import {useState} from "react";

const initialResult = {
  date: "",
  distance: 0,
}

const sortingByDate = (prevState, result) => [...prevState, result].sort((a,b) => new Date(b.date) - new Date(a.date))

export default function App() {
  const [result, setResult] = useState(initialResult);
  let [results, setResults] = useState([]);

  const onChangeResult = (key, value) => {
    if (key === 'distance') setResult(prevState => ({...prevState, ...{[key]: +value}}));
    else setResult(prevState => ({...prevState, ...{[key]: value}}));
  }
  const updateResults = index => {
    results[index].distance += result.distance;
    setResults(results);
    setResult(initialResult);
  }

  const onAddResult = () => {
    if (result.distance === 0 || result.date === "") return;

    const isIndex = results.findIndex(({date}) => date === result.date);
    if (isIndex !== -1) updateResults(isIndex);
    else {
      setResults(prevState => sortingByDate(prevState, result));
      setResult(initialResult);
    }
  }
  const deleteResult = result => setResults(results.filter(({date}) => date !== result.date));

  const onHandleClickResult = ({key, result}) => {
    if (key === 'edit') setResult(result);
    else deleteResult(result);
  }

  return (
    <div className="wrap">
      <div className="container">
        <FormView result={result} onAddResult={onAddResult} onChange={onChangeResult}/>
        <ResultsTable results={results} onHandleClickResult={onHandleClickResult}/>
      </div>
    </div>);
}

