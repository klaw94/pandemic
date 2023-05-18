import React from "react";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";
import { useState } from "react";
import CountryHandCard from "./cards/CountryHandCard";
import { EnumCardTypes } from "../data/handCards";
import EventHandCard from "./cards/EventHandCard";
import "./PlayerMat.css";

export default function PlayerMat(props) {
  const [cardBig, setCardBig] = useState(false);

  function doNothing() {
    setCardBig((prevValue) => !prevValue);
  }
  console.log(props);

  const visualHandCards = props.card.cards.map((card) =>
    card.type === EnumCardTypes.Country ? (
      <CountryHandCard key={nanoid()} card={card} />
    ) : (
      <EventHandCard
        key={nanoid()}
        name={card.name}
        color={card.color}
        photo={card.photo}
        description={card.text}
      />
    )
  );

  const visualRedCards = props.card.cards.map((card) =>
    card.color === "red" ? (
      <CountryHandCard key={nanoid()} card={card} />
    ) : (
      <></>
    )
  );
  const visualBlueCards = props.card.cards.map((card) =>
    card.color === "blue" ? (
      <CountryHandCard key={nanoid()} card={card} />
    ) : (
      <></>
    )
  );

  const visualYellowCards = props.card.cards.map((card) =>
    card.color === "yellow" ? (
      <CountryHandCard key={nanoid()} card={card} />
    ) : (
      <></>
    )
  );
  const visualBlackCards = props.card.cards.map((card) =>
    card.color === "black" ? (
      <CountryHandCard key={nanoid()} card={card} />
    ) : (
      <></>
    )
  );
  const visualEventCards = props.card.cards.map((card) =>
    card.color === "#b1b133" ? (
      <EventHandCard
        key={nanoid()}
        name={card.name}
        color={card.color}
        photo={card.photo}
        description={card.text}
      />
    ) : (
      <></>
    )
  );

  return (
    <div className="playerMat">
      <div className="playerMat-cardDiv">
        <CharacterCard
          key={nanoid()}
          photo={props.card.photo}
          name={props.card.name}
          description={props.card.description}
          color={props.card.color}
          handleClick={doNothing}
          className={cardBig ? "" : "small"}
        />
        {visualBlueCards}
        {visualRedCards}
        {visualYellowCards}
        {visualBlackCards}
        {visualEventCards}
      </div>
    </div>
  );
}
