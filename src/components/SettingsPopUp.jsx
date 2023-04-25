import { useState, useEffect, useRef } from "react";
import "./SettingsPopUp.css";
import SelectPlayerDiv from "./SelectPlayerDiv";
import CharacterDisplayMiniPopUp from "./CharactersDisplayMiniPopUp";

export default function SettingsPopUp(props) {
  const [formData, setFormData] = useState({
    players: [],
    difficulty: 0,
  });
  const [playersData, setPlayersData] = useState([]);
  const [nPlayers, setNPlayers] = useState(0);
  const [characterDisplayMode, setCharacterDisplayMode] = useState(false);

  useEffect(() => {
    let playersFieldData = [];
    for (let i = 0; i < nPlayers; i++) {
      playersFieldData.push({
        title: `Player ${i + 1}`,
        playerNumber: i + 1,
        pawn: "",
        character: "",
      });
    }
    setPlayersData(playersFieldData);
  }, [nPlayers]);

  function handleChangeNPlayers(event) {
    setNPlayers(event.target.value);
  }

  function toggleCharacterDisplay() {
    setCharacterDisplayMode(false);
  }

  function handleChangeDifficulty(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function selectACharacter(playerNumber, characterName, characterIcon) {
    setPlayersData((prevValue) =>
      prevValue.map((player) =>
        player.playerNumber === playerNumber
          ? { ...player, character: characterName, pawn: characterIcon }
          : player
      )
    );
  }

  const visualSelectPlayerDivs = playersData.map((div) => {
    console.log(div);
    let repetition = "";
    let repeatedPlayersArray = playersData.filter(
      (player) => player.character === div.character
    );
    if (repeatedPlayersArray && repeatedPlayersArray.length > 1) {
      repetition = "repeated";
    }
    return (
      <SelectPlayerDiv
        key={div.title}
        title={div.title}
        triggerCharacterDisplay={triggerCharacterDisplay}
        index={div.playerNumber}
        selected={div.pawn}
        repeated={repetition}
      />
    );
  });
  function triggerCharacterDisplay(index) {
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
        <CharacterDisplayMiniPopUp
          player={characterDisplayMode}
          selectedPlayer={playersData.find(
            (data) => data.playerNumber === characterDisplayMode
          )}
          selectACharacter={selectACharacter}
          toggleCharacterDisplay={toggleCharacterDisplay}
        />
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
