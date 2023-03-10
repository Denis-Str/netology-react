import {Routes, Route} from "react-router";
import HomePage from "./pages/index";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/posts/new" exact element={<CreatePost/>}/>
        </Routes>
      </div>
    </div>
  )}

export default App;
