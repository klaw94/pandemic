import { useState, useEffect, useRef } from "react";
import "./SelectPlayerDiv.css";
import CharacterDisplayMiniPopUP from "./CharactersDisplayMiniPopUp";

export default function SelectPlayerDiv(props) {
  return (
    <div>
      {" "}
      <div className="selectPlayerDiv">
        <h3>{props.title}</h3>
        <button onClick={props.triggerCharacterDisplay}>+</button>
      </div>{" "}
    </div>
  );
}
