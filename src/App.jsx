import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import SettingsPopUp from "./components/SettingsPopUp";

function App() {
  const [settingMode, setSettingMode] = useState(true);
  const [gameInfo, setGameInfo] = useState({ players: [], difficulty: 0 });

  function handleSubmitSettings(players, difficulty) {
    setGameInfo({ players: [...players], difficulty: difficulty });
    setSettingMode(false);
  }

  return (
    <div className="App">
      {settingMode ? (
        <SettingsPopUp handleSubmit={handleSubmitSettings} />
      ) : (
        <Board
          playersData={gameInfo.players}
          epidemicCards={gameInfo.difficulty}
        />
      )}
      <div></div>
    </div>
  );
}

export default App;
