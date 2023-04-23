import { useState, useEffect, useRef } from "react";
import "./SelectPlayerDiv.css";
import CharacterDisplayMiniPopUP from "./CharactersDisplayMiniPopUp";

export default function SelectPlayerDiv(props) {
  const [characterDisplayMode, setCharacterDisplayMode] = useState(false);

  function triggerCharacterDisplay() {
    setCharacterDisplayMode((prevValue) => !prevValue);
  }
  return (
    <div>
      {" "}
      {characterDisplayMode && <CharacterDisplayMiniPopUP />}
      <div className="selectPlayerDiv">
        <h3>{props.title}</h3>
        <button onClick={triggerCharacterDisplay}>+</button>
      </div>{" "}
    </div>
  );
}
