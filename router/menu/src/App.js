import {Route, Routes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage";
import Menu from "./components/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes location>
            <Route path="/" exact element={HomePage} />
            <Route path="/drift" element={DriftPage} />
            <Route path="/timeattack" element={TimeAttackPage} />
            <Route path="/forza" element={ForzaPage} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
