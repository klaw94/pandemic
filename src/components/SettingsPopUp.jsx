import { useState, useEffect, useRef } from "react";
import "./SettingsPopUp.css";
import SelectPlayerDiv from "./SelectPlayerDiv";
import CharacterDisplayMiniPopUp from "./CharactersDisplayMiniPopUp";

export default function SettingsPopUp(props) {
  const [formData, setFormData] = useState({
    difficulty: 0,
  });
  const [playersData, setPlayersData] = useState([]);
  const [nPlayers, setNPlayers] = useState(0);
  const [characterDisplayMode, setCharacterDisplayMode] = useState(false);
  const [invalidSubmission, setInvalidSubmission] = useState(false);

  useEffect(() => {
    let playersFieldData = [];
    for (let i = 0; i < nPlayers; i++) {
      playersFieldData.push({
        title: `Player ${i + 1}`,
        playerNumber: i + 1,
        pawn: "",
        character: "",
        repetated: false,
      });
    }
    setPlayersData(playersFieldData);
  }, [nPlayers]);

  useEffect(() => {
    setInvalidSubmission(false);
  }, [playersData, formData]);

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

  function hasDuplicateCharacters(playersInfo) {
    const characterCount = {}; // Create an empty object to store the count of each character
    for (const info of playersInfo) {
      // Iterate over the array of objects
      const character = info.character; // Get the nameOfCharacter property of the current object
      if (characterCount[character]) {
        // If the character has already been counted
        //this expression will check if the characterCount object has a property with a key that matches the value of character.
        characterCount[character]++; // Increment the count for that character
      } else {
        // Otherwise, if it hasn't been counted yet
        characterCount[character] = 1; // Initialize the count to 1. Basically you create a object like {"characterName": 1}
      }
    }
    for (const character in characterCount) {
      // Iterate over the KEYS of the characterCount object
      if (characterCount[character] > 1) {
        // If any count is greater than 1
        return true; // Return true (there are duplicates)
      }
    }
    return false; // If we've gone through all the characters and haven't found duplicates, return false
  }

  function submit() {
    if (
      hasDuplicateCharacters(playersData) ||
      Number(formData.difficulty) === 0 ||
      playersData.filter((info) => info.character === "").length > 0
    ) {
      setInvalidSubmission(true);
    }
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
          <option value={0}>--Choose--</option>
          <option value={4}>Easy</option>
          <option value={5}>Medium</option>
          <option value={6}>Difficult</option>
        </select>
      </div>
      {invalidSubmission && (
        <span className="error">
          Please select different characters and a difficulty level
        </span>
      )}
      <button onClick={submit}>Start!</button>
    </div>
  );
}
