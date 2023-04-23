import React from "react";
import characterCardsData from "../data/characterCards";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import "./SelectPlayerDiv.css";

export default function CharacterDisplayMiniPopUp(props) {
  const visualCharacterCards = characterCardsData.map((card) => {
    return (
      <CharacterCard
        key={nanoid()}
        photo={card.photo}
        name={card.name}
        description={card.description}
        color={card.color}
      />
    );
  });

  return (
    <div className="characterDisplayMiniPopUp">
      <h1>{props.title}</h1>
      <div className="characterDisplayMiniPopUp">{visualCharacterCards}</div>
      <button>select</button>
    </div>
  );
}