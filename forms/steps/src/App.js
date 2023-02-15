import FormView from "./components/FormView";
import ResultsTable from "./components/ResultsTable";
import {useState} from "react";

const initialResult = {
  date: '__.__.__',
  distance: 0,
}

export default function App() {
  const [result, setResult] = useState(initialResult);
  let [results, setResults] = useState([]);

  const onChangeResult = (key, value) => {
    const result = {[key]: value};
    setResult(prevState => ({...prevState, ...result}));
  }
  const updateResults = () => {
    const updateResults = results.map(item => {
      if (item.date === result.date) return ({...item, distance: +item.distance + +result.distance});
      return item;
    });
    setResults(updateResults);
    setResult(initialResult);
  }

  const onAddResult = () => {
    const isResults = results.find(({date}) => date === result.date);
    if (isResults) updateResults(isResults);
    else {
      setResults(prevState => [...prevState, result]);
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

