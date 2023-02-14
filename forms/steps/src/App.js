import FormView from "./components/FormView";
import ResultsTable from "./components/ResultsTable";
import {useState} from "react";

export default function App() {
  const [results, addResult] = useState([]);
  const onAddResult = (result) => {
    addResult(prevState => [...prevState, result])
  }
  return (
    <div className="wrap">
      <div className="container">
        <FormView onAddResult={onAddResult} />
        <ResultsTable results={results} />
      </div>
    </div>);
}

