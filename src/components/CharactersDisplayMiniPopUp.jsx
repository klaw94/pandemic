import React from "react";
import characterCardsData from "../data/characterCards";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import "./SelectPlayerDiv.css";

export default function CharacterDisplayMiniPopUp(props) {
  console.log(props);
  const visualCharacterCards = characterCardsData.map((card) => {
    return (
      <CharacterCard
        key={nanoid()}
        photo={card.photo}
        name={card.name}
        description={card.description}
        color={card.color}
        handleClick={() => props.selectACharacter(props.player, card.name)}
      />
    );
  });

  return (
    <div className="characterDisplayMiniPopUp">
      <h1>{`Player ${props.player}`}</h1>
      <div className="characterDisplayMiniPopUp">{visualCharacterCards}</div>
      <button>select</button>
    </div>
  );
}
