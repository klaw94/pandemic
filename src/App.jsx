import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import SettingsPopUp from "./components/SettingsPopUp";

function App() {
  return (
    <div className="App">
      <SettingsPopUp />
      <Board players="" epidemicCards={5} />
    </div>
  );
}

export default App;
