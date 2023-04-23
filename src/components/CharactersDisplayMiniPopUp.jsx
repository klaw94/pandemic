import React from "react";
import characterCardsData from "../data/characterCards";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import "./SelectPlayerDiv.css";

export default function CharacterDisplayMiniPopUP() {
  const visualCharacterCards = characterCardsData.map((card) => {
    // const styles = {
    //   backgroundImage: `url(/${card.photo})`,
    //   borderBottom: `20px solid ${card.color}`,
    //   borderRight: `20px solid ${card.color}`,
    // };
    return (
      <CharacterCard
        key={nanoid()}
        // styles={styles}
        photo={card.photo}
        name={card.name}
        description={card.description}
      />
    );
  });

  return (
    <div className="characterDisplayMiniPopUp">{visualCharacterCards}</div>
  );
}
