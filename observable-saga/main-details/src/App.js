import {Route, Routes} from "react-router-dom";
import ServicesList from "./components/ServicesList";
import DetailedService from "./components/DetailedService";
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<ServicesList/>}/>
        <Route path="/:id/details" element={<DetailedService/>}/>
      </Routes>
    </div>
  )
}

