import { useState, useEffect, useRef } from "react";
import "./SettingsPopUp.css";
import SelectPlayerDiv from "./SelectPlayerDiv";
import CharacterDisplayMiniPopUp from "./CharactersDisplayMiniPopUp";

export default function SettingsPopUp(props) {
  const [formData, setFormData] = useState({
    players: [],
    difficulty: 0,
  });
  const [selectAPlayerDiv, setselectAPlayerDiv] = useState([]);
  const [nPlayers, setNPlayers] = useState(0);
  const [characterDisplayMode, setCharacterDisplayMode] = useState(false);

  useEffect(() => {
    let playersFieldData = [];
    for (let i = 0; i < nPlayers; i++) {
      playersFieldData.push({ title: `Player ${i + 1}`, selected: "false" });
    }
    setselectAPlayerDiv(playersFieldData);
  }, [nPlayers]);

  function handleChangeNPlayers(event) {
    setNPlayers(event.target.value);
  }

  function handleChangeDifficulty(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const visualSelectPlayerDivs = selectAPlayerDiv.map((div, index) => (
    <SelectPlayerDiv
      key={div.title}
      title={div.title}
      triggerCharacterDisplay={triggerCharacterDisplay}
      index={index + 1}
    />
  ));
  function triggerCharacterDisplay(index) {
    console.log(index);
    setCharacterDisplayMode((prevValue) =>
      prevValue === index && prevValue !== false ? false : index
    );
  }

  return (
    <div className="settingsPopUp">
      <h1>Welcome to Pandemic</h1>
      <h3>Select the number of players</h3>

      <div className="input-field">
        <select
          name={"nPlayer"}
          id="selectList"
          onChange={handleChangeNPlayers}
          value={nPlayers}
        >
          <option>--Choose--</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
        </select>
      </div>
      {characterDisplayMode !== false && (
        <CharacterDisplayMiniPopUp player={characterDisplayMode} />
      )}

      <div className="selectPlayersDiv--div">{visualSelectPlayerDivs}</div>
      <h3>Select the difficulty</h3>

      <div className="input-field">
        <select
          name={"difficulty"}
          id="selectList"
          onChange={handleChangeDifficulty}
          value={formData.difficulty}
        >
          <option>--Choose--</option>
          <option value={4}>Easy</option>
          <option value={5}>Medium</option>
          <option value={6}>Difficult</option>
        </select>
      </div>
    </div>
  );
}
