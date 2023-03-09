import {Routes, Route} from "react-router";
import HomePage from "./pages/index"

function App() {
  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
        </Routes>
      </div>
    </div>
  )}

export default App;
