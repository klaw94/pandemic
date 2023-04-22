import { useState, useEffect, useRef } from "react";
import "./SettingsPopUp.css";
import SelectPlayerDiv from "./SelectPlayerDiv";

export default function SettingsPopUp(props) {
  const [formData, setFormData] = useState({
    players: [],
    difficulty: 0,
  });
  const [selectAPlayerDiv, setselectAPlayerDiv] = useState([]);
  const [nPlayers, setNPlayers] = useState(0);

  useEffect(() => {
    let playersFieldData = [];
    for (let i = 0; i < nPlayers; i++) {
      playersFieldData.push({ title: `Player ${i + 1}` });
    }
    setselectAPlayerDiv(playersFieldData);
  }, [nPlayers]);

  function handleChange(event) {
    setNPlayers(event.target.value);
  }

  const visualSelectPlayerDivs = selectAPlayerDiv.map((div) => (
    <SelectPlayerDiv title={div.title} />
  ));

  return (
    <div className="settingsPopUp">
      <h1>Welcome to Pandemic</h1>
      <h3>Select the number of players</h3>

      <div className="input-field">
        <select
          name={"nPlayer"}
          id="selectList"
          onChange={handleChange}
          value={nPlayers}
        >
          <option>--Choose--</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
        </select>
        <div>{visualSelectPlayerDivs}</div>
      </div>
    </div>
  );
}
