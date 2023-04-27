import React from "react";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import { useState } from "react";
import CountryHandCard from "./cards/CountryHandCard";
import { EnumCardTypes } from "../data/handCards";

export default function PlayerMat(props) {
  const [cardBig, setCardBig] = useState(false);

  function doNothing() {
    setCardBig((prevValue) => !prevValue);
  }
  console.log(props);

  const visualHandCards = props.card.cards.map((card) =>
    card.type === EnumCardTypes.Country ? (
      <CountryHandCard card={card} key={nanoid()} />
    ) : (
      <></>
    )
  );

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
      {visualHandCards}
    </div>
  );
}
