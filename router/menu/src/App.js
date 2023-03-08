import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import Menu from "./components/Menu";
import React from "react";

export default function App() {
  return (
    <div className="app">
      <Menu/>
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="drift" element={<DriftPage/>}/>
          <Route path="timeattack" element={<TimeAttackPage/>}/>
          <Route path="forza" element={<ForzaPage/>}/>
        </Routes>
      </div>
    </div>
  );
}
