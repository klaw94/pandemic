import React from "react";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function PlayerMat(props) {
  const [cardBig, setCardBig] = useState(false);

  function doNothing() {
    setCardBig((prevValue) => !prevValue);
  }
  console.log(props);
  return (
    <div>
      <CharacterCard
        key={nanoid()}
        photo={props.card.photo}
        name={props.card.name}
        description={props.card.description}
        color={props.card.color}
        handleClick={doNothing}
        className={cardBig ? "" : "small"}
      />
    </div>
  );
}
