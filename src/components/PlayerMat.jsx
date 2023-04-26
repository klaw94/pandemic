import React from "react";
import CharacterCard from "./cards/characterCard";
import { nanoid } from "nanoid";

export default function PlayerMat(props) {
  function doNothing() {}
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
        className={""}
      />
    </div>
  );
}
